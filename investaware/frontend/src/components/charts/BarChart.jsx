import React from "react";
import { Bar } from "react-chartjs-2";
const data = {
  labels: [
    "Financials",
    "Consumer Discretionary",
    "Materials",
    "Health Care",
    "IT",
    "Industrials",
    "Telecommunication",
    "Others",
    "Cash",
  ],

  datasets: [
    {
      axis: "x",
      data: [32.13, 30.13, 29.13, 27.13, 18.13, 15.13, 10.13, 8.13, 8.0],
      backgroundColor: [
        "#0A00F7",
        "#5956EA",
        "#7D7AF9",
        "#F859A5",
        "#323232",
        "#777777",
        "#777777",
        "#999999",
        "#C4C4C4",
      ],
      borderColor: [
        "#0A00F7",
        "#5956EA",
        "#7D7AF9",
        "#F859A5",
        "#323232",
        "#777777",
        "#777777",
        "#999999",
        "#C4C4C4",
      ],
      borderWidth: 1,
      barThickness: 55,
    },
  ],
};
const BarChart = () => {
  return (
    <>
      <div>
        <Bar data={data} />
      </div>
    </>
  );
};
export default BarChart;
