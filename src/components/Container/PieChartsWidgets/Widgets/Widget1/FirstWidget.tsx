import React from "react";

import { Arrow } from "../../../../../icons";

import styles from "./FirstWidget.module.scss";
import { percentValue01, pieData01 } from "./data/mock";
import Metrics from "./components/Metrics";
import Title from "./components/Title/Title";
import PieCharts from "./components/PieChartSample/PieChartSample";
import StatTitle from "./components/Stat/StatTitle/StatTitle";
import AverageStats from "./components/AverageStats/AverageStats";
import ChangesInStat from "./components/ChangesInStat/ChangesInStat";
import GroupStatWidget1 from "./components/GroupStatWidget1/GroupStatWidget1";
import WidgetList from "./components/WidgetList/WidgetList";

const FirstWidget = () => {
  return (
    <div className={styles.generalBanking}>
      <div className={styles.container}>
        <Title title="обученность по обязательным программам" />
        <div className={styles.wrapper}>
          <div className={styles.chart}>
            <PieCharts data={pieData01} />
          </div>

          <div className={styles.widgetsContainer}>
            <GroupStatWidget1 />
            <WidgetList />
          </div>
        </div>

        <div className={styles.complitedAverange}>
          <StatTitle title="в среднем завершило по банку" fontSize="12px" />
          <div className={styles.compContainer}>
            <div className={styles.compPercent}>89,1</div>
            <div className={styles.compSymbol}>%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstWidget;
