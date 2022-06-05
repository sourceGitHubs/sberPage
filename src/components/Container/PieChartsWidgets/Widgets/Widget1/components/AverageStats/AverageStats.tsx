import React, { FC } from "react";
import styles from "./AverageStats.module.scss";
import { AverageTypes } from "./types";

const AverageStats: FC<AverageTypes> = ({
  mean,
  param,
  styleMean,
  styleParam,
}) => {
  return (
    <div className={styles.AverageStats}>
      <div style={styleMean} className={styles.mean}>
        {mean}
      </div>
      <div style={styleParam} className={styles.typeParam}>
        {param}
      </div>
    </div>
  );
};

export default AverageStats;
