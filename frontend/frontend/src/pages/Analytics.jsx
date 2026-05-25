import { useEffect, useState } from "react";

import Layout from "../components/Layout";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Analytics() {

  const [chartData, setChartData] = useState({

    labels: [],

    datasets: [
      {
        label: "Expenses",
        data: [],
        backgroundColor: [
          "#2563eb",
          "#16a34a",
          "#f59e0b",
          "#ef4444",
          "#8b5cf6"
        ]
      }
    ]
  });

  useEffect(() => {

    fetchAnalytics();

  }, []);

  const fetchAnalytics = async () => {

    try {

      const response = await fetch(
        "http://127.0.0.1:5000/analytics"
      );

      const data = await response.json();

      setChartData({

        labels: Object.keys(data),

        datasets: [
          {
            label: "Expenses",
            data: Object.values(data),
            backgroundColor: [
              "#2563eb",
              "#16a34a",
              "#f59e0b",
              "#ef4444",
              "#8b5cf6"
            ]
          }
        ]

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
        📊 Expense Analytics
      </h1>

      <div style={cardStyle}>

        <Bar data={chartData} />

      </div>

    </Layout>

  );
}

const cardStyle = {

  background: "white",

  padding: "30px",

  borderRadius: "20px",

  boxShadow:
    "0px 4px 15px rgba(0,0,0,0.1)"

};

export default Analytics;