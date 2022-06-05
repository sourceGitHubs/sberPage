import React, { FC } from "react";
import array from "./../../../icons/arrow.svg";
import styles from "./ChangesInStat.module.scss";
import { ChangesTypes } from "./types";

const ChangesInStat: FC<ChangesTypes> = ({
  num,
  type,
  styleArray,
  styleNum,
  styleType,
}) => {
  return (
    <div className={styles.ChangesInStat}>
      <i style={styleArray} className={styles.array}></i>
      <div style={styleNum} className={styles.num}>
        {num}
      </div>
      <div style={styleType} className={styles.type}>
        {type}
      </div>
    </div>
  );
};

export default ChangesInStat;
