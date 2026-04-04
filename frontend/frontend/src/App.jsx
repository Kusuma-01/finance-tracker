import { useState } from "react";
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function App() {
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [prediction, setPrediction] = useState(null);

  const addExpense = async () => {
    await fetch("http://127.0.0.1:5000/add-expense", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: parseFloat(amount) }),
    });

    setExpenses([...expenses, amount]);
    setAmount("");
  };

  const getPrediction = async () => {
    const res = await fetch("http://127.0.0.1:5000/predict");
    const data = await res.json();
    setPrediction(data.predicted_spending);
  };

  const data = {
    labels: expenses.map((_, i) => `Expense ${i + 1}`),
    datasets: [
      {
        label: "Expenses",
        data: expenses,
      },
    ],
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "30px" }}>
      <h1 style={{ textAlign: "center" }}>💰 AI Finance Tracker</h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="number"
          value={amount}
          placeholder="Enter amount"
          onChange={(e) => setAmount(e.target.value)}
          style={{ padding: "10px", width: "200px" }}
        />
        <button onClick={addExpense} style={{ marginLeft: "10px", padding: "10px" }}>
          Add
        </button>
      </div>

      <div style={{ textAlign: "center" }}>
        <button onClick={getPrediction} style={{ padding: "10px 20px" }}>
          Predict Spending
        </button>
      </div>

      {prediction && (
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>
          📊 Predicted: {prediction}
        </h2>
      )}

      <div style={{ width: "60%", margin: "auto", marginTop: "40px" }}>
        <Bar data={data} />
      </div>
    </div>
  );
}

export default App;