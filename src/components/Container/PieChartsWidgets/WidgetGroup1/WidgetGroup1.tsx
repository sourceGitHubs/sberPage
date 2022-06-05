import React from "react";
import MoreButtons from "../../../../util/MoreButtons/MoreButtons";

import CompulsoryEducationWidget from "../Widgets/Widget1/CompulsoryEducationWidget";
import EducationBudgetWidget from "../Widgets/Widget2/EducationBudgetWidget";

import styles from "./WidgetGroup1.module.scss";

const WidgetGroup1 = () => {
  return (
    <div className={styles.widgetContainer}>
      {" "}
      <div className={styles.widgetGroup}>
        <div className={styles.widgetOne}>
          <CompulsoryEducationWidget />
        </div>

        <div className={styles.widgetTwo}>
          <EducationBudgetWidget />
        </div>
      </div>
      {/* <MoreButtons /> */}
    </div>
  );
};

export default WidgetGroup1;
