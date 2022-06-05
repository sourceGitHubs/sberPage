import React from "react";
import StatTitle from "../Stat/StatTitle/StatTitle";
import ListItem from "./components/ListItem/ListItem";
import styles from "./WidgetList.module.scss";

const WidgetList = () => {
  return (
    <div className={styles.WidgetList}>
      <StatTitle fontSize="12px" title="самые отстающие" />
      <div className={styles.container}>
        <ListItem text="Дивизион 'HR платформа'" percent={32} symbol="%" />
        <ListItem
          text="Управление HR блоков 'Финансов'"
          percent={35}
          symbol="%"
        />
        <ListItem text="Рук-во блока 'HR'" percent={54} symbol="%" />
      </div>
    </div>
  );
};

export default WidgetList;
