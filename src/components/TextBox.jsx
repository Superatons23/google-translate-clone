import React from "react";
import styles from "../styles/TextBox.module.css";
import TextareaAutosize from "react-textarea-autosize";

const TextBox = ({
  type,
  settextTranslate,
  textTranslate,
  translatedText,
  settranslatedText,
}) => {
  const handleDelete = () => {
    settextTranslate("");
    settranslatedText("");
  };
  return (
    <div className={type === "input" ? styles.input : styles.output}>
      <TextareaAutosize
        maxLength="500"
        placeholder={type === "input" ? "Enter Text" : "Translation"}
        disabled={type !== "input"}
        onChange={(e) => settextTranslate(e.target.value)}
        value={type === "output" ? translatedText : textTranslate}
      />
      {type === "input" && (
        <div className={styles.delete} onClick={handleDelete}>
          x
        </div>
      )}
    </div>
  );
};

export default TextBox;
