import unittest
from app import app

class TestFinanceTracker(unittest.TestCase):

    def setUp(self):
        self.client = app.test_client()

    # Test home route
    def test_home(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)

    # Test adding expense
    def test_add_expense(self):
        response = self.client.post('/add-expense', json={"amount": 200})
        self.assertEqual(response.status_code, 200)

    # Test prediction without data
    def test_predict_no_data(self):
        response = self.client.get('/predict')
        self.assertIn(response.status_code, [200, 400])

    # ✅ Test prediction with data (NEW)
    def test_predict_with_data(self):
        self.client.post('/add-expense', json={"amount": 100})
        response = self.client.get('/predict')
        self.assertEqual(response.status_code, 200)

if __name__ == "__main__":
    unittest.main()