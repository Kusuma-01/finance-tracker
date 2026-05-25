import { useState } from "react";

function Prediction() {

  const [prediction, setPrediction] = useState("");

  const predictExpense = async () => {

    const response = await fetch("http://127.0.0.1:5000/predict");

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