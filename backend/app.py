from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

model = joblib.load("model.pkl")

expenses = []

@app.route('/')
def home():
    return "Finance Tracker Running"

@app.route('/add-expense', methods=['POST'])
def add_expense():
    data = request.json
    expenses.append(data['amount'])
    print("Expenses:", expenses)
    return jsonify({"message": "Expense added"})

@app.route('/predict', methods=['GET'])
def predict():
    if len(expenses) == 0:
        return jsonify({"error": "No data"})
    
    total = sum(expenses)
    prediction = model.predict([[total]])
    
    return jsonify({"predicted_spending": prediction.tolist()})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')