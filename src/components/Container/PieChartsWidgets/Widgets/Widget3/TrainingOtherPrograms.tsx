import React from "react";
import Metrics from "../Widget1/components/Metrics";
import PieChartSample from "../Widget1/components/PieChartSample/PieChartSample";
import Title from "../Widget1/components/Title/Title";
import {
  PieColors02,
  PieColors03,
  pieData02,
  pieData03,
} from "../Widget1/data/mock";
import MetricsWidget from "../Widget2/components/MetricsWidget/MetricsWidget";
import WidgetList2 from "../Widget2/components/WidgetList2/WidgetList2";
import styles from "./TrainingOtherPrograms.module.scss";
import { MetricTypes } from "./../Widget1/components/Metrics/types";
import TrainingMetrics from "./components/TrainingMetrics/TrainingMetrics";

const TrainingOtherPrograms = () => {
  return (
    <div className={styles.generalBanking}>
      <div className={styles.container}>
        <Title
          styleTitle={{ marginBottom: "19px", paddingRight: "8px" }}
          title="обученность по другим програмам"
        />
        <div className={styles.wrapper}>
          <div className={styles.chart}>
            <PieChartSample
              data={pieData03}
              innerRadius={40}
              outerRadius={55}
              width={110}
              height={110}
              dataColor={PieColors03}
            />
          </div>

          <div className={styles.widgetsContainer}>
            <TrainingMetrics />
            {/* <Metrics comp={100} nocomp={102} /> */}
            {/* <GroupStatWidget1 />
            <WidgetList /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingOtherPrograms;
