import React from "react";
import infoImage from "./../GeneralImage/info.svg";
import chevronImage from "./../../../../GeneralImage/chevron.svg";

import styles from "./FirstWidget.module.scss";

const FirstWidget = () => {
  return (
    <div className={styles.generalBanking}>
      <div className={styles.title}>
        общебанковские
        <img className={styles.info} src={infoImage} alt="info" />
      </div>

      <div className={styles.statistics}>
        <div className={styles.stat}>
          <div className={styles.name}>
            <div className={styles.green}>завершили</div>
          </div>
          <div className={styles.count}>218</div>
          <div className={styles.percent}>54%</div>
          <img className={styles.chevron} src={chevronImage} alt="" />
        </div>

        <div className={styles.stat}>
          <div className={styles.name}>
            <div className={styles.grey}>не завершили</div>
          </div>
          <div className={styles.count}>104</div>
          <div className={styles.percent}>33%</div>
          <img className={styles.chevron} src={chevronImage} alt="" />
        </div>

        <div className={styles.stat}>
          <div className={styles.name}>
            <div className={styles.red}>просроченно</div>
          </div>
          <div className={styles.count}>22</div>
          <div className={styles.percent}>13%</div>
          <img className={styles.chevron} src={chevronImage} alt="" />
        </div>

        <div className={styles.stat}>
          <div className={styles.name}>
            <div className={styles.yellow}>завершено не успешно?</div>
          </div>
          <div className={styles.count}>22</div>
          <div className={styles.percent}>13%</div>
          <img className={styles.chevron} src={chevronImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FirstWidget;
