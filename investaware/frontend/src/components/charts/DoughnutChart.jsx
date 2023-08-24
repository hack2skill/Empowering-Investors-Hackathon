import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chartjs-plugin-labels";
const DoughnutChart = ({ data, options, width, height }) => {
  return (
    <>
      <div>
        <Doughnut data={data} options={options} width={width} height={height} />
      </div>
    </>
  );
};
export default DoughnutChart;
