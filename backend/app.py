from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import joblib

app = Flask(__name__)
CORS(app)

# Load ML Model
model = joblib.load("model.pkl")

# In-memory expense storage
expenses = []

expense_id = 1


# ---------------- HOME ---------------- #

@app.route('/')
def home():

    return "AI Finance Tracker Running 🚀"


# ---------------- SIGNUP ---------------- #

@app.route('/signup', methods=['POST'])
def signup():

    try:

        data = request.json

        name = data['name']

        email = data['email']

        password = data['password']

        income = 50000

        connection = sqlite3.connect(
            "database.db"
        )

        cursor = connection.cursor()

        cursor.execute("""

        INSERT INTO users
        (name,email,password,income)

        VALUES (?,?,?,?)

        """, (
            name,
            email,
            password,
            income
        ))

        connection.commit()

        connection.close()

        return jsonify({

            "message":
            "Signup Successful ✅"

        })

    except Exception as e:

        return jsonify({

            "error": str(e)

        }), 500


# ---------------- LOGIN ---------------- #

@app.route('/login', methods=['POST'])
def login():

    try:

        data = request.json

        email = data['email']

        password = data['password']

        connection = sqlite3.connect(
            "database.db",
            check_same_thread=False
        )

        cursor = connection.cursor()

        cursor.execute("""

        SELECT id,name,email,income
        FROM users

        WHERE email=? AND password=?

        """, (
            email,
            password
        ))

        user = cursor.fetchone()

        connection.close()

        if user:

            return jsonify({

                "message":
                "Login Successful ✅",

                "user": {

                    "id": user[0],

                    "name": user[1],

                    "email": user[2],

                    "income": user[3]

                }

            })

        else:

            return jsonify({

                "error":
                "Invalid Credentials"

            }), 401

    except Exception as e:

        return jsonify({

            "error": str(e)

        }), 500

# ---------------- ADD EXPENSE ---------------- #

@app.route('/add-expense', methods=['POST'])
def add_expense():

    global expense_id

    try:

        data = request.json

        amount = float(
            data.get('amount', 0)
        )

        category = data.get(
            'category',
            'General'
        )

        expense = {

            "id": expense_id,

            "amount": amount,

            "category": category

        }

        expenses.append(expense)

        expense_id += 1

        print("Expenses:", expenses)

        return jsonify({

            "message":
            "Expense Added Successfully"

        })

    except Exception as e:

        return jsonify({

            "error": str(e)

        }), 500


# ---------------- GET EXPENSES ---------------- #

@app.route('/expenses', methods=['GET'])
def get_expenses():

    return jsonify({

        "expenses": expenses

    })


# ---------------- DELETE EXPENSE ---------------- #

@app.route(
    '/delete-expense/<int:id>',
    methods=['DELETE']
)
def delete_expense(id):

    global expenses

    try:

        updated_expenses = []

        for expense in expenses:

            if expense["id"] != id:

                updated_expenses.append(
                    expense
                )

        expenses = updated_expenses

        print("Updated Expenses:", expenses)

        return jsonify({

            "message":
            "Expense Deleted Successfully"

        })

    except Exception as e:

        return jsonify({

            "error": str(e)

        }), 500


# ---------------- ANALYTICS ---------------- #

@app.route('/analytics', methods=['GET'])
def analytics():

    category_data = {}

    for expense in expenses:

        category = expense["category"]

        amount = expense["amount"]

        if category in category_data:

            category_data[category] += amount

        else:

            category_data[category] = amount

    return jsonify(category_data)


# ---------------- PREDICTION ---------------- #

@app.route('/predict', methods=['GET'])
def predict():

    try:

        if len(expenses) == 0:

            return jsonify({

                "error":
                "No expense data available"

            })

        total = sum(

            expense["amount"]

            for expense in expenses

        )

        prediction = model.predict([[total]])

        budget_limit = 10000

        if total > budget_limit:

            alert = "⚠️ Budget limit exceeded!"

        else:

            alert = "✅ Spending is under control"

        return jsonify({

            "total_expenses": total,

            "predicted_spending":
            prediction.tolist(),

            "budget_limit":
            budget_limit,

            "alert":
            alert

        })

    except Exception as e:

        return jsonify({

            "error": str(e)

        }), 500


# ---------------- PROFILE ---------------- #

@app.route('/profile/<int:user_id>',
methods=['GET'])

def get_profile(user_id):

    connection = sqlite3.connect(
        "database.db",
        check_same_thread=False
    )

    cursor = connection.cursor()

    cursor.execute("""

    SELECT name,email,income
    FROM users

    WHERE id=?

    """, (user_id,))

    user = cursor.fetchone()

    connection.close()

    if user:

        return jsonify({

            "name": user[0],

            "email": user[1],

            "income": user[2]

        })

    return jsonify({

        "error": "User not found"

    }), 404

# ---------------- UPDATE PROFILE ---------------- #

@app.route(
    '/update-profile/<int:user_id>',
    methods=['PUT']
)
def update_profile(user_id):

    try:

        data = request.json

        connection = sqlite3.connect(
            "database.db",
            check_same_thread=False
        )

        cursor = connection.cursor()

        cursor.execute("""

        UPDATE users

        SET name=?,
            email=?,
            income=?

        WHERE id=?

        """, (

            data['name'],
            data['email'],
            data['income'],
            user_id

        ))

        connection.commit()

        connection.close()

        return jsonify({

            "message":
            "Profile Updated Successfully"

        })

    except Exception as e:

        return jsonify({

            "error": str(e)

        }), 500


# ---------------- SAVINGS ---------------- #
@app.route('/savings/<int:user_id>',
methods=['GET'])

def savings(user_id):

    try:

        connection = sqlite3.connect(
            "database.db",
            check_same_thread=False
        )

        cursor = connection.cursor()

        # Fetch user income
        cursor.execute("""

        SELECT income
        FROM users

        WHERE id=?

        """, (user_id,))

        user = cursor.fetchone()

        connection.close()

        if user:

            income = int(user[0])

        else:

            income = 0

        total_expenses = sum(

            expense["amount"]

            for expense in expenses

        )

        savings_amount = (
            income - total_expenses
        )

        return jsonify({

            "income": income,

            "expenses": total_expenses,

            "savings": savings_amount

        })

    except Exception as e:

        return jsonify({

            "error": str(e)

        }), 500
# ---------------- RUN APP ---------------- #

if __name__ == '__main__':

    app.run(
        debug=True,
        host='0.0.0.0'
    )