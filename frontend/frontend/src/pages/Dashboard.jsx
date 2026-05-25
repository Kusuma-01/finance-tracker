import { useEffect, useState } from "react";

import Layout from "../components/Layout";

import {
  FaWallet,
  FaChartLine,
  FaMoneyBillWave,
  FaExclamationTriangle
} from "react-icons/fa";

function Dashboard() {

  const [data, setData] = useState({

    total_expenses: 0,

    predicted_spending: 0,

    budget_limit: 0,

    alert: ""

  });

  useEffect(() => {

    fetchDashboardData();

  }, []);

  const fetchDashboardData = async () => {

    try {

      const response = await fetch(
        "http://127.0.0.1:5000/predict"
      );

      const result = await response.json();

      setData({

        total_expenses:
          result.total_expenses,

        predicted_spending:
          result.predicted_spending[0],

        budget_limit:
          result.budget_limit,

        alert:
          result.alert

      });

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
        💰 Dashboard
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

          <FaWallet
            size={40}
            color="#2563eb"
          />

          <h2>Total Expenses</h2>

          <h1>
            ₹{data.total_expenses}
          </h1>

        </div>

        <div style={cardStyle}>

          <FaChartLine
            size={40}
            color="#16a34a"
          />

          <h2>Predicted Spending</h2>

          <h1>
            ₹{Number(data.predicted_spending).toFixed(0)}
          </h1>

        </div>

        <div style={cardStyle}>

          <FaMoneyBillWave
            size={40}
            color="#f59e0b"
          />

          <h2>Budget Limit</h2>

          <h1>
            ₹{data.budget_limit}
          </h1>

        </div>

        <div style={cardStyle}>

          <FaExclamationTriangle
            size={40}
            color="#ef4444"
          />

          <h2>Budget Status</h2>

          <h3>
            {data.alert}
          </h3>

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
    "0px 4px 20px rgba(0,0,0,0.1)",

  textAlign: "center"

};

export default Dashboard;