import React from "react";

import styles from "./HeadContainer.module.scss";
import chevronImage from "./../../GeneralImage/chevron.svg";

const HeadContainer = () => {
  return (
    <div className={styles.head}>
      <div className={styles.title}>обученность по обязательным программам</div>
      <div className={styles.calendar}>
        <div className={styles.timeButton}>
          10 декабря
          <img className={styles.chevron} src={chevronImage} alt="" />
        </div>
        <div className={styles.timeButton}>
          по неделям
          <img className={styles.chevron} src={chevronImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeadContainer;
