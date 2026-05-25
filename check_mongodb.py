"""
Check MongoDB for contact submissions
"""
from pymongo import MongoClient
from dotenv import load_dotenv
from pathlib import Path
import os

# Load environment variables
backend_env = Path("/app/backend/.env")
load_dotenv(backend_env)

MONGO_URL = os.getenv("MONGO_URL")
DB_NAME = os.getenv("DB_NAME")

mongo_client = MongoClient(MONGO_URL)
db = mongo_client[DB_NAME]
contact_submissions = db.contact_submissions

print("=" * 80)
print("CHECKING MONGODB FOR CONTACT SUBMISSIONS")
print("=" * 80)

# Get all submissions
submissions = list(contact_submissions.find().sort("timestamp", -1).limit(10))

print(f"\nTotal submissions in database: {contact_submissions.count_documents({})}")
print(f"\nLast 10 submissions:")
print("-" * 80)

for i, sub in enumerate(submissions, 1):
    print(f"\n{i}. Submission ID: {sub.get('id')}")
    print(f"   Name: {sub.get('name')}")
    print(f"   Email: {sub.get('email')}")
    print(f"   Phone: {sub.get('phone')}")
    print(f"   Message: {sub.get('message')[:50]}..." if len(sub.get('message', '')) > 50 else f"   Message: {sub.get('message')}")
    print(f"   Status: {sub.get('status')}")
    print(f"   Notification Email ID: {sub.get('notification_email_id')}")
    print(f"   Autoreply Email ID: {sub.get('autoreply_email_id')}")
    print(f"   Errors: {sub.get('errors')}")
    print(f"   Timestamp: {sub.get('timestamp')}")

mongo_client.close()
