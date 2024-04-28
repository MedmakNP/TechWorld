import { useTranslation } from "react-i18next";
import styles from "./intro.module.css";

function Intro() {
  const { t } = useTranslation();
  return (
    <div className={styles.slider}>
      <div className={styles.overlay}></div>
      <div className={styles.infoWrap}>
        <p className={styles.title}>IPHONE 14 PRO</p>
        <p className={styles.text}>{t("intro.text")} </p>
        <button className={styles.btn}>{t("intro.btn")}</button>
      </div>
    </div>
  );
}

export default Intro;
