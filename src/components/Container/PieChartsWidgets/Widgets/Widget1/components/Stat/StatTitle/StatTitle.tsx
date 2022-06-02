import React, { FC } from "react";
import { TitleProps } from "../StatTitle/types";
import styles from "./StatTitle.module.scss";

const StatTitle: FC<TitleProps> = ({
  title,
  color = "#939393",
  fontSize = "14px",
}) => {
  return (
    <div className={styles.title}>
      <div style={{ fontSize: fontSize, color: color }}>{title}</div>
    </div>
  );
};

export default StatTitle;
