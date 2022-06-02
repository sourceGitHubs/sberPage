import React, { FC } from "react";
import array from "./../../../icons/arrow.svg";
import styles from "./ChangesInStat.module.scss";
import { ChangesTypes } from "./types";

const ChangesInStat: FC<ChangesTypes> = ({ num, type }) => {
  return (
    <div className={styles.ChangesInStat}>
      <i className={styles.array}></i>
      <div className={styles.num}>{num}</div>
      <div className={styles.type}>{type}</div>
    </div>
  );
};

export default ChangesInStat;
