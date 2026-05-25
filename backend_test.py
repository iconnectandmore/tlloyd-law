"""
Backend API Testing for Lloyd Law Firm Contact Form
Tests the POST /api/contact endpoint
"""
import requests
import os
from pymongo import MongoClient
from dotenv import load_dotenv
from pathlib import Path

# Load environment variables
backend_env = Path("/app/backend/.env")
frontend_env = Path("/app/frontend/.env")

load_dotenv(backend_env)
load_dotenv(frontend_env)

# Get URLs from environment
BACKEND_URL = os.getenv("REACT_APP_BACKEND_URL")
MONGO_URL = os.getenv("MONGO_URL")
DB_NAME = os.getenv("DB_NAME")

print(f"Testing backend at: {BACKEND_URL}")
print(f"MongoDB at: {MONGO_URL}")
print(f"Database: {DB_NAME}")
print("=" * 80)

# MongoDB connection for verification
mongo_client = MongoClient(MONGO_URL)
db = mongo_client[DB_NAME]
contact_submissions = db.contact_submissions


def test_valid_submission_all_fields():
    """Test 1: Valid submission with all fields including optional phone"""
    print("\n[TEST 1] Valid submission with all fields (including phone)")
    print("-" * 80)
    
    payload = {
        "name": "John Anderson",
        "email": "john.anderson@example.com",
        "phone": "(904) 555-1234",
        "message": "I need legal assistance with estate planning. I would like to schedule a consultation to discuss creating a will and trust for my family."
    }
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/api/contact",
            json=payload,
            timeout=30
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            assert "status" in data, "Response missing 'status' field"
            assert "submission_id" in data, "Response missing 'submission_id' field"
            assert data["status"] in ["sent", "partial"], f"Unexpected status: {data['status']}"
            
            # Verify MongoDB storage
            submission_id = data["submission_id"]
            db_record = contact_submissions.find_one({"id": submission_id})
            
            if db_record:
                print(f"✓ MongoDB record found: {submission_id}")
                print(f"  - Name: {db_record.get('name')}")
                print(f"  - Email: {db_record.get('email')}")
                print(f"  - Phone: {db_record.get('phone')}")
                print(f"  - Status: {db_record.get('status')}")
                assert db_record["name"] == payload["name"], "Name mismatch in DB"
                assert db_record["email"] == payload["email"], "Email mismatch in DB"
                assert db_record["phone"] == payload["phone"], "Phone mismatch in DB"
                print("✓ TEST 1 PASSED: Valid submission with all fields works correctly")
            else:
                print(f"✗ MongoDB record NOT found for submission_id: {submission_id}")
                print("✗ TEST 1 FAILED: Submission not stored in MongoDB")
        else:
            print(f"✗ TEST 1 FAILED: Expected 200, got {response.status_code}")
            print(f"Response: {response.text}")
            
    except Exception as e:
        print(f"✗ TEST 1 FAILED with exception: {str(e)}")


def test_valid_submission_without_phone():
    """Test 2: Valid submission without optional phone field"""
    print("\n[TEST 2] Valid submission without phone (optional field)")
    print("-" * 80)
    
    payload = {
        "name": "Sarah Mitchell",
        "email": "sarah.mitchell@example.com",
        "message": "I am interested in discussing probate matters. My father recently passed away and I need guidance on the estate settlement process."
    }
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/api/contact",
            json=payload,
            timeout=30
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            assert "status" in data, "Response missing 'status' field"
            assert "submission_id" in data, "Response missing 'submission_id' field"
            assert data["status"] in ["sent", "partial"], f"Unexpected status: {data['status']}"
            
            # Verify MongoDB storage
            submission_id = data["submission_id"]
            db_record = contact_submissions.find_one({"id": submission_id})
            
            if db_record:
                print(f"✓ MongoDB record found: {submission_id}")
                print(f"  - Name: {db_record.get('name')}")
                print(f"  - Email: {db_record.get('email')}")
                print(f"  - Phone: {db_record.get('phone')}")
                print(f"  - Status: {db_record.get('status')}")
                assert db_record["name"] == payload["name"], "Name mismatch in DB"
                assert db_record["email"] == payload["email"], "Email mismatch in DB"
                assert db_record.get("phone") is None, "Phone should be None"
                print("✓ TEST 2 PASSED: Valid submission without phone works correctly")
            else:
                print(f"✗ MongoDB record NOT found for submission_id: {submission_id}")
                print("✗ TEST 2 FAILED: Submission not stored in MongoDB")
        else:
            print(f"✗ TEST 2 FAILED: Expected 200, got {response.status_code}")
            print(f"Response: {response.text}")
            
    except Exception as e:
        print(f"✗ TEST 2 FAILED with exception: {str(e)}")


def test_invalid_email_format():
    """Test 3: Invalid email format should return 422 validation error"""
    print("\n[TEST 3] Invalid email format (should return 422)")
    print("-" * 80)
    
    payload = {
        "name": "Test User",
        "email": "not-a-valid-email",
        "message": "This should fail validation"
    }
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/api/contact",
            json=payload,
            timeout=30
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:
            print("✓ TEST 3 PASSED: Invalid email correctly rejected with 422")
        else:
            print(f"✗ TEST 3 FAILED: Expected 422, got {response.status_code}")
            
    except Exception as e:
        print(f"✗ TEST 3 FAILED with exception: {str(e)}")


def test_missing_name():
    """Test 4a: Missing required field - name"""
    print("\n[TEST 4a] Missing required field: name (should return 422)")
    print("-" * 80)
    
    payload = {
        "email": "test@example.com",
        "message": "Missing name field"
    }
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/api/contact",
            json=payload,
            timeout=30
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:
            print("✓ TEST 4a PASSED: Missing name correctly rejected with 422")
        else:
            print(f"✗ TEST 4a FAILED: Expected 422, got {response.status_code}")
            
    except Exception as e:
        print(f"✗ TEST 4a FAILED with exception: {str(e)}")


def test_missing_email():
    """Test 4b: Missing required field - email"""
    print("\n[TEST 4b] Missing required field: email (should return 422)")
    print("-" * 80)
    
    payload = {
        "name": "Test User",
        "message": "Missing email field"
    }
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/api/contact",
            json=payload,
            timeout=30
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:
            print("✓ TEST 4b PASSED: Missing email correctly rejected with 422")
        else:
            print(f"✗ TEST 4b FAILED: Expected 422, got {response.status_code}")
            
    except Exception as e:
        print(f"✗ TEST 4b FAILED with exception: {str(e)}")


def test_missing_message():
    """Test 4c: Missing required field - message"""
    print("\n[TEST 4c] Missing required field: message (should return 422)")
    print("-" * 80)
    
    payload = {
        "name": "Test User",
        "email": "test@example.com"
    }
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/api/contact",
            json=payload,
            timeout=30
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:
            print("✓ TEST 4c PASSED: Missing message correctly rejected with 422")
        else:
            print(f"✗ TEST 4c FAILED: Expected 422, got {response.status_code}")
            
    except Exception as e:
        print(f"✗ TEST 4c FAILED with exception: {str(e)}")


def test_empty_name():
    """Test 4d: Empty name field (should return 422)"""
    print("\n[TEST 4d] Empty name field (should return 422)")
    print("-" * 80)
    
    payload = {
        "name": "",
        "email": "test@example.com",
        "message": "Name is empty"
    }
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/api/contact",
            json=payload,
            timeout=30
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:
            print("✓ TEST 4d PASSED: Empty name correctly rejected with 422")
        else:
            print(f"✗ TEST 4d FAILED: Expected 422, got {response.status_code}")
            
    except Exception as e:
        print(f"✗ TEST 4d FAILED with exception: {str(e)}")


def test_empty_message():
    """Test 4e: Empty message field (should return 422)"""
    print("\n[TEST 4e] Empty message field (should return 422)")
    print("-" * 80)
    
    payload = {
        "name": "Test User",
        "email": "test@example.com",
        "message": ""
    }
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/api/contact",
            json=payload,
            timeout=30
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:
            print("✓ TEST 4e PASSED: Empty message correctly rejected with 422")
        else:
            print(f"✗ TEST 4e FAILED: Expected 422, got {response.status_code}")
            
    except Exception as e:
        print(f"✗ TEST 4e FAILED with exception: {str(e)}")


if __name__ == "__main__":
    print("\n" + "=" * 80)
    print("LLOYD LAW FIRM - CONTACT FORM ENDPOINT TESTING")
    print("=" * 80)
    
    # Run all tests
    test_valid_submission_all_fields()
    test_valid_submission_without_phone()
    test_invalid_email_format()
    test_missing_name()
    test_missing_email()
    test_missing_message()
    test_empty_name()
    test_empty_message()
    
    print("\n" + "=" * 80)
    print("TESTING COMPLETE")
    print("=" * 80)
    
    # Close MongoDB connection
    mongo_client.close()
