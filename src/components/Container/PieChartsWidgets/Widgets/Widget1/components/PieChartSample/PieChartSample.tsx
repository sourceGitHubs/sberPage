import React, { FC } from "react";
import { Pie, PieChart, Sector, Cell, ResponsiveContainer } from "recharts";
import { PieColors01 } from "../../data/mock";
import styles from "./PieChartSample.module.scss";
import { PieTypes } from "./types";

const PieChartSample: FC<PieTypes> = ({
  data,
  innerRadius = 90,
  outerRadius = 115,
  width = 235,
  height = 235,
  dataColor = PieColors01,
}) => {
  return (
    <div className={styles.graph}>
      <PieChart width={width} height={height}>
        <Pie
          data={data}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={dataColor[index % dataColor.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default PieChartSample;
