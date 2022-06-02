import React, { FC } from "react";
import styles from "./AverageStats.module.scss";
import { AverageTypes } from "./types";

const AverageStats: FC<AverageTypes> = ({ mean, param }) => {
  return (
    <div className={styles.AverageStats}>
      <div className={styles.mean}>{mean} </div>
      <div className={styles.typeParam}>{param}</div>
    </div>
  );
};

export default AverageStats;
