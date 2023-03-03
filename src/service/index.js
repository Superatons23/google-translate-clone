import axios from "axios";

const mainAxios = axios.create({
  baseURL: "https://google-translate1.p.rapidapi.com/language/translate/v2/",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "",
    "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
  },
});

export const getLanguages = (id) => {
  return mainAxios
    .get(`/languages/`, {
      params: {
        target: "en",
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
};

export const translate = (data) => {
  return mainAxios
    .post(``, data)
    .then((res) => res.data.data.translations[0].translatedText)
    .catch((err) => {
      throw err;
    });
};
