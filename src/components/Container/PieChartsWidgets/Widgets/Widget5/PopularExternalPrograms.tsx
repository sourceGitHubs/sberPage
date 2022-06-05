import React from "react";
import Title from "../Widget1/components/Title/Title";
import LineItem from "../Widget4/components/LineItem/LineItem";
import styles from "./PopularExternalPrograms.module.scss";

const PopularExternalPrograms = () => {
  return (
    <div className={styles.generalBanking}>
      <div className={styles.container}>
        <Title
          styleTitle={{ marginBottom: "15px", paddingRight: "8px" }}
          title="популярные внутренние программы"
        />
        <div className={styles.wrapper}>
          <div className={styles.widgetsContainer}>
            <LineItem
              title="Master of Data Sience"
              percent={46}
              symbol="чел."
              lineWidth={{ width: "140px" }}
            />

            <LineItem
              title="Английский язык"
              percent={37}
              symbol="чел."
              lineWidth={{ width: "90px" }}
            />

            <LineItem
              title="Высшая математика"
              percent={15}
              symbol="чел."
              lineWidth={{ width: "52px" }}
            />

            <LineItem
              title="UX-дизайн"
              percent={15}
              symbol="чел."
              lineWidth={{ width: "52px" }}
            />

            <LineItem
              title="Ментальная аэробика"
              percent={7}
              symbol="чел."
              lineWidth={{ width: "25px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularExternalPrograms;
