import React, { FC } from "react";

import styles from "./StatTitle.module.scss";
import { StatTitleTypes } from "./types";

const StatTitle: FC<StatTitleTypes> = ({ title }) => {
  return <div className={styles.statTitle}>{title}</div>;
};

export default StatTitle;
