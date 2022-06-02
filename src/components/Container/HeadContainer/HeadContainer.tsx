import React from "react";

import styles from "./HeadContainer.module.scss";
import { Arrow } from "../../../icons";
// import iconInside from "./icons/inside.svg";

const HeadContainer = () => {
  return (
    <div className={styles.head}>
      <div className={styles.title}>аналитика</div>
      {/* <div className={styles.calendar}>
        <div className={styles.timeButton}>
          10 декабря
          <Arrow direction="down" />
        </div>
        <div className={styles.timeButton}>
          по неделям
          <Arrow direction="down" />
        </div>
      </div> */}
      <div className={styles.inside}>
        <i className={styles.insideImage}></i>
        <div>инсайды</div>
      </div>
    </div>
  );
};

export default HeadContainer;
