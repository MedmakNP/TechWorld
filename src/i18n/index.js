import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import ua from "./ua";

export const resources = {
  ua: { translation: ua },
  en: { translation: en },
};

export const appLocales = Object.keys(resources);

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: appLocales,
  react: {
    useSuspense: true,
  },
});
export default i18n;
