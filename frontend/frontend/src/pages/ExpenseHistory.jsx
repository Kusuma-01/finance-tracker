import { useEffect, useState } from "react";

import Layout from "../components/Layout";

function ExpenseHistory() {

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {

    fetchExpenses();

  }, []);

  // Fetch Expenses
  const fetchExpenses = async () => {

    try {

      const response = await fetch(
        "http://127.0.0.1:5000/expenses"
      );

      const data = await response.json();

      setExpenses(data.expenses);

    } catch (error) {

      console.log(error);

    }

  };

  // Delete Expense
  const deleteExpense = async (id) => {

    try {

      const response = await fetch(
        `http://127.0.0.1:5000/delete-expense/${id}`,
        {

          method: "DELETE"

        }
      );

      const data = await response.json();

      console.log(data);

      if (response.ok) {

        alert(data.message);

        // Refresh Expenses
        fetchExpenses();

      } else {

        alert(data.error);

      }

    } catch (error) {

      console.log(error);

      alert("Delete Failed");

    }

  };

  return (

    <Layout>

      <h1
        style={{
          fontSize: "50px",
          marginBottom: "30px",
          color: "#1e293b"
        }}
      >
        📜 Expense History
      </h1>

      {

        expenses.length === 0 ? (

          <h2>No Expenses Added</h2>

        ) : (

          expenses.map((expense) => (

            <div
              key={expense.id}
              style={cardStyle}
            >

              <h2>
                ₹{expense.amount}
              </h2>

              <p>
                Category:
                {" "}
                {expense.category}
              </p>

              <button
                onClick={() =>
                  deleteExpense(expense.id)
                }
                style={buttonStyle}
              >
                Delete
              </button>

            </div>

          ))

        )

      }

    </Layout>

  );
}

const cardStyle = {

  background: "white",

  padding: "30px",

  borderRadius: "20px",

  marginBottom: "20px",

  boxShadow:
    "0px 4px 10px rgba(0,0,0,0.1)"

};

const buttonStyle = {

  background: "#ef4444",

  color: "white",

  border: "none",

  padding: "12px 20px",

  borderRadius: "10px",

  cursor: "pointer",

  marginTop: "10px"

};

export default ExpenseHistory;