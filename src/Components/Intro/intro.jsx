import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./intro.module.css";
import { useContext } from "react";
import { BlurContext } from "../../Providers/ThemeProvider";

function Intro() {
  const { t } = useTranslation();
  const { isBlurred } = useContext(BlurContext);
  return (
    <div className={`${styles.slider} ${styles[isBlurred]}`}>
      <div className={styles.overlay}></div>
      <div className={styles.infoWrap}>
        <p className={styles.title}>IPHONE 14 PRO</p>
        <p className={styles.text}>{t("intro.text")} </p>
        <Link to="/shopPage" className={styles.btn}>
          {" "}
          {t("intro.btn")}{" "}
        </Link>
      </div>
    </div>
  );
}

export default Intro;
