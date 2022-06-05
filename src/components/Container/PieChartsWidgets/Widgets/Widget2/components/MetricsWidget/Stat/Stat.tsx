import React, { FC } from "react";
import AverageStats from "../../../../Widget1/components/AverageStats/AverageStats";
import StatTitle from "../StatTitle/StatTitle";
import styles from "./Stat.module.scss";
import { StatTypes } from "./types";

const Stat: FC<StatTypes> = ({ title, mean, param, statStyle }) => {
  return (
    <div style={statStyle} className={styles.statContainer}>
      <StatTitle title={title} />
      <div className={styles.stat}>
        {" "}
        <AverageStats
          styleMean={{ fontSize: "16px" }}
          styleParam={{ fontSize: "12px" }}
          mean={mean}
          param={param}
        />
      </div>
    </div>
  );
};

export default Stat;
