import React from "react";
import { Bar } from "react-chartjs-2";

const SalesVolumeChart = ({ data }) => {
  const maxDataValue = Math.trunc(
    Math.max(...data.datasets.flatMap((dataset) => dataset.data)) + 50
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

export default SalesVolumeChart;
