import React from "react";

import styles from "./SecondWidget.module.scss";
import { percentValue02, pieData01, pieData02 } from "./../Widget1/data/mock";
import Metrics from "../Widget1/components/Metrics/Metrics";
import Title from "../Widget1/components/Title/Title";
import PieCharts from "../Widget1/components/PieChartSample/PieChartSample";

const SecondWidget = () => {
  return (
    <div className={styles.generalBanking}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {" "}
          <Title title="целевые" />
          <Metrics
            comp={153}
            nocomp={78}
            overdue={32}
            percentValue={percentValue02}
          />
        </div>
        <PieCharts data={pieData02} />
      </div>
    </div>
  );
};

export default SecondWidget;
