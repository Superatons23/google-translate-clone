import React from "react";
import styles from "../styles/SelectDropDown.module.css";
import Arrows from "./Arrows";

const SelectDropDown = ({
  sourcelanguage,
  targetlanguage,
  setshowModal,
  handleClick,
}) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.select_drop_down}
        onClick={() => setshowModal("input")}
      >
        <input type="text" value={sourcelanguage} readOnly />
        <div className={styles.down_arrow}>
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 25"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
      </div>
      <div className={styles.arrow_container} onClick={() => handleClick()}>
        <Arrows />
      </div>
      <div
        className={styles.select_drop_down}
        onClick={() => setshowModal("output")}
      >
        <input type="text" value={targetlanguage} readOnly />
        <div className={styles.down_arrow}>
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 25"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectDropDown;
