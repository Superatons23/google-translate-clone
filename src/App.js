import { useState, useEffect } from "react";
import Modal from "./components/Modal";
import SelectDropDown from "./components/SelectDropDown";
import TextBox from "./components/TextBox";
import { getLanguages, translate } from "./service";
import styles from "./styles/App.module.css";

function App() {
  const [showModal, setshowModal] = useState("");
  const [sourceLanguage, setsourceLanguage] = useState({
    language: "en",
    name: "English",
  });
  const [targetLanguage, settargetLanguage] = useState({
    language: "es",
    name: "Spanish",
  });
  const [languages, setLanguages] = useState([]);
  const [textTranslate, settextTranslate] = useState("");
  const [translatedText, settranslatedText] = useState("");

  const handleClick = () => {
    setsourceLanguage(targetLanguage);
    settargetLanguage(sourceLanguage);
  };

  useEffect(() => {
    const fetchLanguages = async () => {
      await getLanguages()
        .then((arr) => setLanguages(arr.data.languages))
        .catch(() => console.log("err"));
    };
    fetchLanguages();
  }, []);

  useEffect(() => {
    const translateText = () => {
      translate({
        q: textTranslate,
        target: targetLanguage.language,
        source: sourceLanguage.language,
      })
        .then((value) => {
          settranslatedText(value);
        })
        .catch((err) => console.log(err));
    };
    const getData = setTimeout(() => {
      if (textTranslate.trim().length !== 0) {
        translateText();
      }
    }, 1000);
    return () => clearTimeout(getData);
  }, [textTranslate, targetLanguage, sourceLanguage]);

  return (
    <div className={styles.app}>
      <div className={styles.container_boxes}>
        {!showModal ? (
          <>
            <SelectDropDown
              setshowModal={setshowModal}
              sourcelanguage={sourceLanguage.name}
              targetlanguage={targetLanguage.name}
              handleClick={handleClick}
            />

            <div className={styles.boxes}>
              <TextBox
                language={sourceLanguage.name}
                type="input"
                setshowModal={setshowModal}
                settextTranslate={settextTranslate}
                textTranslate={textTranslate}
                settranslatedText={settranslatedText}
              />

              <TextBox
                language={targetLanguage.name}
                enabled={false}
                type="output"
                setshowModal={setshowModal}
                translatedText={translatedText}
              />
            </div>
          </>
        ) : (
          <Modal
            chosenLanguage={
              showModal === "input" ? sourceLanguage.name : targetLanguage.name
            }
            setChosenLanguage={
              showModal === "input" ? setsourceLanguage : settargetLanguage
            }
            setshowModal={setshowModal}
            languages={languages}
          />
        )}
      </div>
    </div>
  );
}

export default App;
