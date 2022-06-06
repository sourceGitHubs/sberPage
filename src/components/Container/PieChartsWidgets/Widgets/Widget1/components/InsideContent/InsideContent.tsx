import React, { FC } from "react";
import AverageStats from "../AverageStats/AverageStats";
import ChangesInStat from "../ChangesInStat/ChangesInStat";
import styles from "./InsideContent.module.scss";
import { insideContentTypes } from "./types";

const InsideContent: FC<insideContentTypes> = ({
  text = "завершили",
  styleMean = { fontSize: "34px", fontWeight: "700" },
  styleParam,
  mean = 54,
  param = "%",
  num = 5,
  type = "WoW",
}) => {
  return (
    <div className={styles.insideContent}>
      <div className={styles.text}>{text}</div>
      <div className={styles.percent}>
        <AverageStats
          styleMean={styleMean}
          styleParam={styleParam}
          mean={mean}
          param={param}
        />
      </div>
      <div className={styles.changes}>
        {" "}
        <ChangesInStat num={num} type={type} />
      </div>
    </div>
  );
};

export default InsideContent;
