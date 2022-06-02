import React from "react";

import FilterBar from "./FilterBar/FilterBar";
import HeadContainer from "./HeadContainer/HeadContainer";

import styles from "./Container.module.scss";
import FirstWidget from "./PieChartsWidgets/Widgets/Widget1/FirstWidget";
import SecondWidget from "./PieChartsWidgets/Widgets/Widget2/SecondWidget";
import WidgetGroup1 from "./PieChartsWidgets/WidgetGroup1/WidgetGroup1";

const Container = () => {
  return (
    <div className={styles.container}>
      <HeadContainer />
      <FilterBar />
      <WidgetGroup1 />
    </div>
  );
};

export default Container;
