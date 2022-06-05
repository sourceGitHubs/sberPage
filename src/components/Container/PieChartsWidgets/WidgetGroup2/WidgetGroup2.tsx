import React from "react";
import TrainingOtherPrograms from "../Widgets/Widget3/TrainingOtherPrograms";
import PopularInternalProgramsWidget from "../Widgets/Widget4/PopularInternalProgramsWidget";
import styles from "./WidgetGroup2.module.scss";

const WidgetGroup2 = () => {
  return (
    <div className={styles.widgetGroup2}>
      <TrainingOtherPrograms />
      <PopularInternalProgramsWidget />
    </div>
  );
};

export default WidgetGroup2;
