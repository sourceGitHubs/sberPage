import React from "react";
import { percentValue01 } from "../../data/mock";
import AverageStats from "../AverageStats/AverageStats";
import ChangesInStat from "../ChangesInStat/ChangesInStat";
import Metrics from "../Metrics";
import StatTitle from "../Stat/StatTitle/StatTitle";

import styles from "./GroupStatWidget1.module.scss";

const GroupStatWidget1 = () => {
  return (
    <div className={styles.groupStat}>
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

      <div className={styles.blockContainer}>
        <StatTitle title="целевые" />
        <div className={styles.stat}>
          <AverageStats mean={54} param="%" />
          <ChangesInStat num={2} type="п.п. WoW" />
        </div>
        <Metrics comp={162} nocomp={93} percentValue={percentValue01} />
      </div>
    </div>
  );
};

export default GroupStatWidget1;
