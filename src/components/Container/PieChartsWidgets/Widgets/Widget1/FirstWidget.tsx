import React from "react";

import { Arrow } from "../../../../../icons";

import styles from "./FirstWidget.module.scss";
import { percentValue01, pieData01 } from "./data/mock";
import Metrics from "./components/Metrics";
import Title from "./components/Title/Title";
import PieCharts from "./components/PieChartSample/PieChartSample";

const FirstWidget = () => {
  return (
    <div className={styles.generalBanking}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {" "}
          <Title title="общебанковские" />
          <Metrics
            comp={218}
            nocomp={104}
            overdue={22}
            notsuccessfully={22}
            percentValue={percentValue01}
          />
        </div>
        <PieCharts data={pieData01} />
      </div>
    </div>
  );
};

export default FirstWidget;
