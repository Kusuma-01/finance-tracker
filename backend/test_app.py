import unittest

from app import app


class TestFinanceTracker(unittest.TestCase):

    def setUp(self):

        self.client = app.test_client()

    # Test Home Route
    def test_home(self):

        response = self.client.get('/')

        self.assertEqual(
            response.status_code,
            200
        )

    # Test Add Expense API
    def test_add_expense(self):

        response = self.client.post(

            '/add-expense',

            json={

                "amount": 200,

                "category": "Food"

            }

        )

        self.assertEqual(
            response.status_code,
            200
        )

    # Test Predict API Without Data
    def test_predict_no_data(self):

        response = self.client.get('/predict')

        self.assertIn(

            response.status_code,

            [200, 400]

        )

    # Test Predict API With Data
    def test_predict_with_data(self):

        self.client.post(

            '/add-expense',

            json={

                "amount": 100,

                "category": "Travel"

            }

        )

        response = self.client.get('/predict')

        self.assertEqual(
            response.status_code,
            200
        )

    # Test Expenses History API
    def test_get_expenses(self):

        response = self.client.get('/expenses')

        self.assertEqual(
            response.status_code,
            200
        )

    # Test Savings API
    def test_savings(self):

        response = self.client.get('/savings/1')

        self.assertIn(

            response.status_code,

            [200, 404]

        )

    # Test Profile API
    def test_profile(self):

        response = self.client.get('/profile/1')

        self.assertIn(

            response.status_code,

            [200, 404]

        )

    # Test Login API
    def test_login(self):

        response = self.client.post(

            '/login',

            json={

                "email": "test@gmail.com",

                "password": "123456"

            }

        )

        self.assertIn(

            response.status_code,

            [200, 401]

        )

    # Test Signup API
    def test_signup(self):

        response = self.client.post(

            '/signup',

            json={

                "name": "Test User",

                "email": "testuser@gmail.com",

                "password": "123456"

            }

        )

        self.assertIn(

            response.status_code,

            [200, 400]

        )


if __name__ == "__main__":

    unittest.main()