import React from "react";
import ListItem from "../../../Widget1/components/WidgetList/components/ListItem/ListItem";
import StatTitle from "../MetricsWidget/StatTitle/StatTitle";
import styles from "./WidgetList2.module.scss";

const WidgetList2 = () => {
  return (
    <div className={styles.WidgetList}>
      <StatTitle title="больше всех обучаются" />
      <div className={styles.container}>
        <ListItem
          text="Отдел методологии обучения"
          percent={3 + ",2"}
          symbol="млн ₽"
        />
        <ListItem
          text="Отдел методологии оценки и развития"
          percent={2 + ",4"}
          symbol="млн ₽"
        />
        <ListItem
          text="Центр обучения и развития мас.дол..."
          percent={1 + ",7"}
          symbol="млн ₽"
        />
      </div>
    </div>
  );
};

export default WidgetList2;
