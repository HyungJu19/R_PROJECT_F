import React from "react";
import { Bar } from "react-chartjs-2";

const UserFeedbackScoreChart = ({ data }) => {
  const options = { scales: { y: { beginAtZero: true } } };

  return <Bar data={data} options={options} />;
};

export default UserFeedbackScoreChart;
