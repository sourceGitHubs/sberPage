import React from "react";

import FilterBar from "./FilterBar/FilterBar";
import HeadContainer from "./HeadContainer/HeadContainer";

import styles from "./Container.module.scss";
import FirstWidget from "./PieChartsWidgets/Widgets/Widget1/FirstWidget";

const Container = () => {
  return (
    <div className={styles.container}>
      <HeadContainer />
      <FilterBar />
      <FirstWidget />
    </div>
  );
};

export default Container;
