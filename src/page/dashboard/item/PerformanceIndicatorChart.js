import React from "react";
import { Bar } from "react-chartjs-2";

const PerformanceIndicatorChart = ({ data }) => {
      const maxDataValue = Math.trunc(
        Math.max(...data.datasets.flatMap((dataset) => dataset.data)) + 2
      );
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: maxDataValue,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default PerformanceIndicatorChart;
