import { useEffect, useState } from "react";

import Layout from "../components/Layout";

import {
  FaWallet,
  FaMoneyBillWave,
  FaPiggyBank
} from "react-icons/fa";

function Savings() {

  const [data, setData] = useState({

    income: 0,

    expenses: 0,

    savings: 0

  });

  useEffect(() => {

    fetchSavings();

  }, []);

  const fetchSavings = async () => {

  try {

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    const response = await fetch(
      `https://finance-backend-cwm9.onrender.com/savings/${user.id}`
    );

    const result = await response.json();

    console.log(result);

    setData(result);

  } catch (error) {

    console.log(error);

  }

};
  return (

    <Layout>

      <h1
        style={{
          fontSize: "40px",
          marginBottom: "40px",
          color: "#1e293b"
        }}
      >
        💰 Savings Tracker
      </h1>

      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",

          gap: "25px"
        }}
      >

        <div style={cardStyle}>

          <FaMoneyBillWave
            size={40}
            color="#16a34a"
          />

          <h2>Income</h2>

          <h1>
            ₹{data.income}
          </h1>

        </div>

        <div style={cardStyle}>

          <FaWallet
            size={40}
            color="#ef4444"
          />

          <h2>Expenses</h2>

          <h1>
            ₹{data.expenses}
          </h1>

        </div>

        <div style={cardStyle}>

          <FaPiggyBank
            size={40}
            color="#2563eb"
          />

          <h2>Savings</h2>

          <h1>
            ₹{data.savings}
          </h1>

        </div>

      </div>

    </Layout>

  );
}

const cardStyle = {

  background: "white",

  padding: "30px",

  borderRadius: "20px",

  boxShadow:
    "0px 4px 15px rgba(0,0,0,0.1)",

  textAlign: "center"

};

export default Savings;