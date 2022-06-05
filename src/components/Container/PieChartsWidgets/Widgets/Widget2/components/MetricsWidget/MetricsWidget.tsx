import React from "react";
import AverageStats from "../../../Widget1/components/AverageStats/AverageStats";

import styles from "./MetricsWidget.module.scss";
import Stat from "./Stat/Stat";
import StatTitle from "./StatTitle/StatTitle";

const MetricsWidget = () => {
  return (
    <div className={styles.MetricsWidget}>
      <Stat title="факт" mean={52 + ",0"} param="млн ₽" />
      <Stat title="резерв" mean={2 + ",2"} param="млн ₽" />
      <Stat
        statStyle={{ color: "#bbb" }}
        title="на согласовании"
        mean={0 + ",1"}
        param="млн ₽"
      />
    </div>
  );
};

export default MetricsWidget;
