import React from "react";
import { percentValue01 } from "../../data/mock";
import AverageStats from "../AverageStats/AverageStats";
import ChangesInStat from "../ChangesInStat/ChangesInStat";
import Metrics from "../Metrics";

import styles from "./Stat.module.scss";
import StatTitle from "./StatTitle/StatTitle";

const Stat = () => {
  return (
    <div className={styles.blockContainer}>
      <StatTitle title="общебанковские" />
      <div className={styles.stat}>
        <AverageStats mean={46} param="%" />
        <ChangesInStat num={4} type="п.п. WoW" />
      </div>
      <Metrics
        comp={218}
        nocomp={104}
        overdue={22}
        percentValue={percentValue01}
      />
    </div>
  );
};

export default Stat;
