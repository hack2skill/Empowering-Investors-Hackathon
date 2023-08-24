import React from "react";
import { Pie } from "react-chartjs-2";
const data = {
  labels: ["Large Cap", "Mid Cap", "Small Cap", "Cash & Equivalents"],
  datasets: [
    {
      label: "# of Votes",
      data: [68.92, 18.23, 5.81, 5.42],
      backgroundColor: ["#ED6D85", "#56A1E5", "#F7CE6B", "#6CBDBF"],
      borderColor: ["#ED6D85", "#56A1E5", "#F7CE6B", "#6CBDBF"],
      borderWidth: 1,
    },
  ],
};
const PieChart = () => {
  return (
    <>
      <div>
        <Pie data={data} />
      </div>
    </>
  );
};
export default PieChart;
