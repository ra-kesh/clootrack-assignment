import React from "react";

import { PieChart } from "./PieChart";
import { BarChart } from "./BarChart";

const Chart = ({ elements, type }) => {
  return (
    <div style={{ width: "30rem", height: "30rem" }}>
      {type === "Pie" && <PieChart elements={elements} />}
      {type === "Bar" && <BarChart elements={elements} />}
    </div>
  );
};

export default Chart;
