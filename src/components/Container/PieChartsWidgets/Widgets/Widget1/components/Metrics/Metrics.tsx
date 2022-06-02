import React, { FC } from "react";

import { Arrow } from "../../../../../../../icons";

import styles from "./Metrics.module.scss";
import { MetricTypes } from "./types";

const Metrics: FC<MetricTypes> = ({
  comp,
  nocomp,
  overdue = 0,
  notsuccessfully = 0,
  percentValue,
}) => {
  return (
    <div className={styles.statistics}>
      <div className={styles.stat}>
        <div className={styles.name}>
          <div className={styles.green}>завершили</div>
        </div>
        <div className={styles.count}>{comp}</div>
        {/* <div className={styles.percent}>{percentValue.comp}%</div> */}
        {/* <Arrow direction="right" /> */}
      </div>

      <div className={styles.stat}>
        <div className={styles.name}>
          <div className={styles.grey}>не завершили</div>
        </div>
        <div className={styles.count}>{nocomp}</div>
        {/* <div className={styles.percent}>{percentValue.nocomp}%</div> */}
        {/* <Arrow direction="right" /> */}
      </div>

      {overdue != 0 ? (
        <div className={styles.stat}>
          <div className={styles.name}>
            <div className={styles.red}>просроченно</div>
          </div>
          <div className={styles.count}>{overdue}</div>
          {/* <div className={styles.percent}>{percentValue.overdue}%</div> */}
          {/* <Arrow direction="right" /> */}
        </div>
      ) : null}

      {notsuccessfully != 0 ? (
        <div className={styles.stat}>
          <div className={styles.name}>
            <div className={styles.yellow}>завершено не успешно?</div>
          </div>
          <div className={styles.count}> {notsuccessfully}</div>
          {/* <div className={styles.percent}>{percentValue.notsuccessfully}%</div> */}
          {/* <Arrow direction="right" /> */}
        </div>
      ) : null}
    </div>
  );
};

export default Metrics;
