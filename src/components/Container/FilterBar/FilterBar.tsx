import React from "react";

import infoImage from "./images/info.svg";

import styles from "./FilterBar.module.scss";

const FilterBar = () => {
  return (
    <div className={styles.filterbar}>
      <div className={styles.tabs}>
        <button className={styles.tab}>линейная</button>
        <button className={styles.tab}>сберджайл</button>
        <div className={styles.cellbutton}>
          <select className={styles.blog} name="blog" id="blog">
            <option value="HR">Блог HR</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
      <div className={styles.filters}>
        <select className={styles.filter} name="blog" id="blog">
          <option value="filter">фильтры</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <img src={infoImage} alt="info" />
      </div>
    </div>
  );
};

export default FilterBar;
