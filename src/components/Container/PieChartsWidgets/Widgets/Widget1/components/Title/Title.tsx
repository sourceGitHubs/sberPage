import React, { FC } from "react";

import infoImage from "./../../../icons/info.svg";

import styles from "./Title.module.scss";
import { TitleProps } from "./types";

const Title: FC<TitleProps> = ({ title }) => {
  return (
    <div className={styles.title}>
      <div style={{ fontSize: "14px" }}>{title}</div>
      <img className={styles.info} src={infoImage} alt="info" />
    </div>
  );
};

export default Title;
