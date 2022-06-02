import React from "react";
import MoreButtons from "../MoreButtons/MoreButtons";

import FirstWidget from "../Widgets/Widget1/FirstWidget";
import SecondWidget from "../Widgets/Widget2/SecondWidget";

import styles from "./WidgetGroup1.module.scss";

const WidgetGroup1 = () => {
  return (
    <div className={styles.widgetContainer}>
      {" "}
      <div className={styles.widgetGroup}>
        <FirstWidget />
        {/* <SecondWidget /> */}
      </div>
      {/* <MoreButtons /> */}
    </div>
  );
};

export default WidgetGroup1;
