import React, { useState } from "react";
import styles from "../styles/Modal.module.css";
const Modal = ({
  setshowModal,
  languages,
  chosenLanguage,
  setChosenLanguage,
}) => {
  const [searchedLanguage, setsearchedLanguage] = useState("");

  const filteredLanguajes = languages?.filter((value) =>
    value.name
      .toString()
      .toLowerCase()
      .startsWith(searchedLanguage.toLowerCase())
  );

  const handleChange = (e) => {
    setsearchedLanguage(e.target.value);
  };

  const handleClick = (e) => {
    setChosenLanguage(e);
    setshowModal("");
  };
  return (
    <div className={styles.option_list}>
      <div className={styles.search_bar}>
        <input autoFocus value={searchedLanguage} onChange={handleChange} />
        <div className={styles.close_button} onClick={() => setshowModal("")}>
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </div>
      </div>
      <div className={styles.option_container}>
        <ul>
          {filteredLanguajes?.map((value, _index) => (
            <div
              className={styles.list_item}
              onClick={() => handleClick(value)}
              key={_index}
            >
              <div className={styles.icon}>
                {chosenLanguage === value.name ? "✓" : ""}
              </div>
              <li
                key={_index}
                style={{
                  color: chosenLanguage === value.name ? "#8ab4f8" : "",
                }}
              >
                {value.name}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
