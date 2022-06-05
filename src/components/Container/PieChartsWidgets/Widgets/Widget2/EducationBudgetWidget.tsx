import React from "react";

import styles from "./EducationBudgetWidget.module.scss";
import {
  percentValue02,
  PieColors02,
  pieData01,
  pieData02,
} from "../Widget1/data/mock";
import Metrics from "../Widget1/components/Metrics/Metrics";
import Title from "../Widget1/components/Title/Title";
import PieCharts from "../Widget1/components/PieChartSample/PieChartSample";
import GroupStatWidget1 from "../Widget1/components/GroupStatWidget1/GroupStatWidget1";

import StatTitle from "../Widget1/components/Stat/StatTitle/StatTitle";
import MetricsWidget from "./components/MetricsWidget/MetricsWidget";
import WidgetList2 from "./components/WidgetList2/WidgetList2";

const EducationBudgetWidget = () => {
  return (
    <div className={styles.generalBanking}>
      <div className={styles.container}>
        <Title
          styleTitle={{ marginBottom: "19px" }}
          title="бюджет на обучение"
        />
        <div className={styles.wrapper}>
          <div className={styles.chart}>
            <PieCharts
              data={pieData02}
              innerRadius={60}
              outerRadius={80}
              width={160}
              height={160}
              dataColor={PieColors02}
            />
          </div>

          <div className={styles.widgetsContainer}>
            <MetricsWidget />
            {/* <GroupStatWidget1 />
            <WidgetList /> */}
          </div>
        </div>

        <div className={styles.conclusion}>
          <div className={styles.conContainer}>
            <div className={styles.percent}>33 %</div>
            <div className={styles.text}>
              от расходов подразделения «Департамент HR-компетенций»
            </div>
          </div>
        </div>

        <WidgetList2 />

        {/* <div className={styles.complitedAverange}>
          <StatTitle title="в среднем завершило по банку" fontSize="12px" />
          <div className={styles.compContainer}>
            <div className={styles.compPercent}>89,1</div>
            <div className={styles.compSymbol}>%</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default EducationBudgetWidget;
