import React from "react";
import styles from "./MoreButtons.module.scss";

const MoreButtons = () => {
  return (
    <div className={styles.buttons}>
      <div className={styles.reveal}>
        <select name="reveal" id="reveal">
          <option value="reveal">расскрыть динамику</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className={styles.employees}>все сотрудники</div>
    </div>
  );
};

export default MoreButtons;
