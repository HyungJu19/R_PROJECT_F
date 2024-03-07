import React from "react";
import { Bar } from "react-chartjs-2";

const SalesVolumeChart = ({ data }) => {
  
  const maxDataValue =
    Math.max(...data.datasets.flatMap((dataset) => dataset.data)) + 3 ;

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: maxDataValue, 
    
        ticks: {
          callback: function (value, index, values) {
            return value.toFixed(2); 
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default SalesVolumeChart;
