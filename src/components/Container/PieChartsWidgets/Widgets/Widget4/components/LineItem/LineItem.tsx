import React, { FC } from "react";
import styles from "./LineItem.module.scss";
import { LineItemTypes } from "./types";

const LineItem: FC<LineItemTypes> = ({ title, lineWidth, percent, symbol }) => {
  return (
    <div className={styles.LineItem}>
      <div style={{ fontSize: "12px" }} className={styles.text}>
        {title}
      </div>
      <div style={lineWidth} className={styles.line}>
        <hr />
      </div>
      <div className={styles.LineItemContainer}>
        <div style={{ fontSize: "12px" }} className={styles.percent}>
          {percent}
        </div>
        <div style={{ fontSize: "12px" }} className={styles.symbol}>
          {symbol}
        </div>
      </div>
    </div>
  );
};

export default LineItem;
