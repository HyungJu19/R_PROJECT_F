import React from "react";
import { Bar } from "react-chartjs-2";

const PerformanceIndicatorChart = ({ data }) => {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default PerformanceIndicatorChart;
