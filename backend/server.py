from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime
import resend


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend setup
RESEND_API_KEY = os.environ.get("RESEND_API_KEY")
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "onboarding@resend.dev")
CONTACT_TO_EMAIL = os.environ.get("CONTACT_TO_EMAIL", "info@tlloyd-law.com")
if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str


class ContactRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    phone: Optional[str] = Field(default=None, max_length=40)
    message: str = Field(..., min_length=1, max_length=4000)


class ContactSubmission(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: Optional[str] = None
    message: str
    notification_email_id: Optional[str] = None
    autoreply_email_id: Optional[str] = None
    status: str = "received"
    timestamp: datetime = Field(default_factory=datetime.utcnow)


# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]


def _build_notification_html(data: ContactRequest) -> str:
    safe_message = (data.message or "").replace("\n", "<br>")
    phone_row = f"""
        <tr>
          <td style="padding:8px 0;color:#6b5e58;font-family:Arial,sans-serif;font-size:14px;width:120px;">Phone</td>
          <td style="padding:8px 0;color:#2c2422;font-family:Arial,sans-serif;font-size:14px;">{data.phone}</td>
        </tr>
    """ if data.phone else ""
    return f"""
    <!doctype html>
    <html>
      <body style="margin:0;padding:0;background:#ece4d6;font-family:Arial,sans-serif;color:#2c2422;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#ece4d6;padding:32px 0;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #c9a96e33;">
                <tr>
                  <td style="background:#7a1a1a;color:#f3e8d3;padding:18px 24px;font-family:Georgia,serif;font-size:20px;">
                    Lloyd Law Firm &mdash; New Contact Form Submission
                  </td>
                </tr>
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 16px;color:#2c2422;font-size:14px;line-height:1.6;">
                      You have received a new inquiry through your website contact form.
                    </p>
                    <table cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="padding:8px 0;color:#6b5e58;font-family:Arial,sans-serif;font-size:14px;width:120px;">Name</td>
                        <td style="padding:8px 0;color:#2c2422;font-family:Arial,sans-serif;font-size:14px;">{data.name}</td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;color:#6b5e58;font-family:Arial,sans-serif;font-size:14px;">Email</td>
                        <td style="padding:8px 0;color:#2c2422;font-family:Arial,sans-serif;font-size:14px;">
                          <a href="mailto:{data.email}" style="color:#7a1a1a;text-decoration:none;">{data.email}</a>
                        </td>
                      </tr>
                      {phone_row}
                    </table>
                    <hr style="border:0;border-top:1px solid #c9a96e55;margin:20px 0;">
                    <p style="margin:0 0 8px;color:#6b5e58;font-family:Arial,sans-serif;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Message</p>
                    <p style="margin:0;color:#2c2422;font-family:Arial,sans-serif;font-size:15px;line-height:1.7;">
                      {safe_message}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="background:#f3ecdd;padding:14px 24px;font-family:Arial,sans-serif;color:#6b5e58;font-size:12px;">
                    Sent automatically from tlloydlaw.com contact form.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
    """


def _build_autoreply_html(data: ContactRequest) -> str:
    return f"""
    <!doctype html>
    <html>
      <body style="margin:0;padding:0;background:#ece4d6;font-family:Arial,sans-serif;color:#2c2422;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#ece4d6;padding:32px 0;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #c9a96e33;">
                <tr>
                  <td style="background:#7a1a1a;color:#f3e8d3;padding:20px 24px;font-family:Georgia,serif;font-size:22px;">
                    Lloyd Law Firm, P.L.L.C.
                  </td>
                </tr>
                <tr>
                  <td style="padding:28px 24px;">
                    <p style="margin:0 0 16px;color:#2c2422;font-size:15px;line-height:1.7;">
                      Dear {data.name},
                    </p>
                    <p style="margin:0 0 16px;color:#2c2422;font-size:15px;line-height:1.7;">
                      Thank you for reaching out to Lloyd Law Firm. We have received your message and a member of our team will respond as soon as possible, typically within one business day.
                    </p>
                    <p style="margin:0 0 16px;color:#2c2422;font-size:15px;line-height:1.7;">
                      If your matter is time-sensitive, please feel free to call us directly at
                      <a href="tel:+19044193073" style="color:#7a1a1a;text-decoration:none;font-weight:bold;">(904) 419-3073</a>.
                    </p>
                    <p style="margin:24px 0 8px;color:#7a1a1a;font-family:Georgia,serif;font-size:18px;font-style:italic;">
                      &ldquo;Trust. Legacy. Peace of Mind.&rdquo;
                    </p>
                    <hr style="border:0;border-top:1px solid #c9a96e55;margin:20px 0;">
                    <p style="margin:0;color:#6b5e58;font-family:Arial,sans-serif;font-size:13px;line-height:1.6;">
                      Lloyd Law Firm, P.L.L.C.<br>
                      9951 Atlantic Blvd, Suite 300<br>
                      Jacksonville, Florida 32225<br>
                      Phone: (904) 419-3073<br>
                      Email: info@tlloyd-law.com
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="background:#f3ecdd;padding:14px 24px;font-family:Arial,sans-serif;color:#6b5e58;font-size:11px;line-height:1.5;">
                    This is an automated confirmation. Please do not reply directly. This email and any communications through our website do not create an attorney-client relationship.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
    """


@api_router.post("/contact")
async def submit_contact_form(payload: ContactRequest):
    if not RESEND_API_KEY:
        logger.error("RESEND_API_KEY not configured")
        raise HTTPException(status_code=500, detail="Email service is not configured.")

    submission = ContactSubmission(**payload.dict())

    # Store submission first so nothing is lost even if email fails
    await db.contact_submissions.insert_one(submission.dict())

    notification_id = None
    autoreply_id = None
    errors = []

    # 1) Notify the firm
    try:
        notif_params = {
            "from": f"Lloyd Law Website <{SENDER_EMAIL}>",
            "to": [CONTACT_TO_EMAIL],
            "reply_to": payload.email,
            "subject": f"New contact form submission from {payload.name}",
            "html": _build_notification_html(payload),
        }
        result = await asyncio.to_thread(resend.Emails.send, notif_params)
        notification_id = result.get("id") if isinstance(result, dict) else None
    except Exception as e:
        logger.exception("Failed to send notification email")
        errors.append(f"notification: {str(e)}")

    # 2) Auto-reply confirmation to the visitor
    try:
        auto_params = {
            "from": f"Lloyd Law Firm <{SENDER_EMAIL}>",
            "to": [payload.email],
            "subject": "Thank you for contacting Lloyd Law Firm",
            "html": _build_autoreply_html(payload),
        }
        result = await asyncio.to_thread(resend.Emails.send, auto_params)
        autoreply_id = result.get("id") if isinstance(result, dict) else None
    except Exception as e:
        logger.exception("Failed to send auto-reply email")
        errors.append(f"autoreply: {str(e)}")

    status = "sent" if notification_id else "partial" if (notification_id or autoreply_id) else "failed"

    await db.contact_submissions.update_one(
        {"id": submission.id},
        {"$set": {
            "notification_email_id": notification_id,
            "autoreply_email_id": autoreply_id,
            "status": status,
            "errors": errors or None,
        }},
    )

    if status == "failed":
        # Submission still stored in DB; surface friendly message but include status
        return {
            "status": "failed",
            "submission_id": submission.id,
            "message": "We received your message but couldn't deliver the email confirmation. We'll still reach out to you.",
        }

    return {
        "status": status,
        "submission_id": submission.id,
        "message": "Thank you. Your message has been received.",
    }


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
