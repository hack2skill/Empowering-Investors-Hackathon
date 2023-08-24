import React from "react";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
const BarsChart = ({ data, options, width, height }) => {
  return (
    <>
      <div>
        <Bar data={data} options={options} width={width} height={height} />
      </div>
    </>
  );
};
export default BarsChart;
