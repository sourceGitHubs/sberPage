import React, { FC } from "react";

import styles from "./ListItem.module.scss";
import { ListTypes } from "./types";

const ListItem: FC<ListTypes> = ({ text, percent, symbol }) => {
  return (
    <div className={styles.textItem}>
      <div className={styles.itemContainer}>
        <div className={styles.text}>{text}</div>
        <div className={styles.union}>
          <div className={styles.percent}>{percent}</div>
          <div className={styles.symbol}>{symbol}</div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
