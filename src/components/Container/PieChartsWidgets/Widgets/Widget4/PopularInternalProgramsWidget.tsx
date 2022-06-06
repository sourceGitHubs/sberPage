import React, { PureComponent } from "react";
import Title from "../Widget1/components/Title/Title";
import LineItem from "./components/LineItem/LineItem";
import styles from "./PopularInternalProgramsWidget.module.scss";

const PopularInternalProgramsWidget = () => {
  return (
    <div className={styles.generalBanking}>
      <div className={styles.container}>
        <Title
          styleTitle={{ marginBottom: "15px", paddingRight: "6px" }}
          title="популярные внутренние программы"
        />
        <div className={styles.wrapper}>
          <div className={styles.widgetsContainer}>
            <LineItem
              title="Цифровые навыки"
              percent={46}
              symbol="%"
              lineWidth={{ width: "130px" }}
            />

            <LineItem
              title="HARD"
              percent={37}
              symbol="%"
              lineWidth={{ width: "90px" }}
            />

            <LineItem
              title="DIGITAL"
              percent={15}
              symbol="%"
              lineWidth={{ width: "52px" }}
            />

            <LineItem
              title="COGNITIVE"
              percent={15}
              symbol="%"
              lineWidth={{ width: "52px" }}
            />

            <LineItem
              title="Другие"
              percent={22}
              symbol="%"
              lineWidth={{ width: "74px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularInternalProgramsWidget;
