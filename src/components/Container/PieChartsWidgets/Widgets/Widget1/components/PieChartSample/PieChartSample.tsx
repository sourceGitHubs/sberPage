import React, { FC } from "react";
import { Pie, PieChart, Sector, Cell, ResponsiveContainer } from "recharts";
import { COLORS } from "../../data/mock";
import styles from "./PieChartSample.module.scss";
import { PieTypes } from "./types";

const PieChartSample: FC<PieTypes> = ({ data }) => {
  return (
    <div className={styles.graph}>
      <PieChart width={170} height={170}>
        <Pie
          data={data}
          // cx={120}
          // cy={200}
          cx={80}
          cy={80}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default PieChartSample;
