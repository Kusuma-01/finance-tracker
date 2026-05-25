import { useState } from "react";

import Layout from "../components/Layout";

function AddExpense() {

  const [amount, setAmount] = useState("");

  const [category, setCategory] = useState("");

  const addExpense = async () => {

    try {

      const response = await fetch(
        "https://finance-backend-cwm9.onrender.com/add-expense",
        {

          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({

            amount,
            category

          })

        }
      );

      const data = await response.json();

      alert(data.message);

      setAmount("");
      setCategory("");

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <Layout>

      <h1
        style={{
          fontSize: "40px",
          marginBottom: "30px",
          color: "#1e293b"
        }}
      >
        ➕ Add Expense
      </h1>

      <div style={cardStyle}>

        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Enter Category"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          style={inputStyle}
        />

        <button
          onClick={addExpense}
          style={buttonStyle}
        >
          Add Expense
        </button>

      </div>

    </Layout>

  );
}

const cardStyle = {

  background: "white",

  padding: "40px",

  borderRadius: "20px",

  width: "400px",

  boxShadow:
    "0px 4px 15px rgba(0,0,0,0.1)"

};

const inputStyle = {

  width: "100%",

  padding: "15px",

  marginBottom: "20px",

  borderRadius: "10px",

  border: "1px solid #cbd5e1",

  fontSize: "16px"

};

const buttonStyle = {

  width: "100%",

  padding: "15px",

  background: "#2563eb",

  color: "white",

  border: "none",

  borderRadius: "10px",

  fontSize: "18px",

  cursor: "pointer"

};

export default AddExpense;