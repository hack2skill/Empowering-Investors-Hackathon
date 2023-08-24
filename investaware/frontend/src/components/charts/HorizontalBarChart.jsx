import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
const HorizontalBarChart = ({ data, options, width, height }) => {
  return (
    <>
      <div>
        <HorizontalBar
          data={data}
          options={options}
          width={width}
          height={height}
        />
      </div>
    </>
  );
};
export default HorizontalBarChart;
