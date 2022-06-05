import React from "react";
import AverageStats from "../../../Widget1/components/AverageStats/AverageStats";
import ChangesInStat from "../../../Widget1/components/ChangesInStat/ChangesInStat";
import styles from "./TrainingMetrics.module.scss";

const TrainingMetrics = () => {
  return (
    <div className={styles.statistics}>
      <div className={styles.stat}>
        <div className={styles.name}>
          <div className={styles.green}>завершили</div>
        </div>
        <div className={styles.count}></div>
        <AverageStats
          styleMean={{ fontSize: "16px", marginBottom: "2px" }}
          mean={324}
          param="чел."
        />
        <ChangesInStat
          styleArray={{ width: "12px", height: "15px" }}
          styleNum={{ fontSize: "12px" }}
          styleType={{ fontSize: "12px" }}
          num={5}
          type="WoW"
        />
      </div>

      <div className={styles.stat}>
        <div className={styles.name}>
          <div className={styles.grey}>не завершили</div>
        </div>
        <div className={styles.count}>{}</div>
        <AverageStats
          styleMean={{ fontSize: "16px", marginBottom: "2px" }}
          mean={387}
          param="чел."
        />
      </div>
    </div>
  );
};

export default TrainingMetrics;
