import { useState } from "react";

function Prediction() {

  const [prediction, setPrediction] = useState("");

  const predictExpense = async () => {

    const response = await fetch("https://finance-backend-cwm9.onrender.com/predict");

    const data = await response.json();

    setPrediction(data.predicted_spending);

  };

  return (

    <div>

      <h1>AI Spending Prediction</h1>

      <button onClick={predictExpense}>
        Predict Spending
      </button>

      <h2>{prediction}</h2>

    </div>

  );
}

export default Prediction;