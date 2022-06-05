import React from "react";

import styles from "./Header.module.scss";

import searchImage from "./images/search.svg";
import pushImage from "./images/push.svg";
import themeImage from "./images/theme.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.breadcrumbs}>
        <div></div>
        <div className={styles.slash}></div>
        <div></div>
      </div>

      <div className={styles.menu}>
        <div className={styles.search}>
          <img className={styles.image} src={searchImage} alt="search" />
          <div className={styles.text}>поиск</div>{" "}
        </div>

        <div className={styles.push}>
          <img className={styles.image} src={pushImage} alt="push" />
          <div className={styles.text}>уведомления</div>{" "}
        </div>
        <div className={styles.theme}>
          <img className={styles.image} src={themeImage} alt="theme" />
        </div>
      </div>
    </div>
  );
};

export default Header;
