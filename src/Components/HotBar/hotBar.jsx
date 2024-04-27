import styles from "./hotBar.module.css";
import { ThemeContext } from "../../Providers/ThemeProvider";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

function HotBar() {
  const { type } = useContext(ThemeContext);
  const {t} = useTranslation()
  return (
    <div className={styles.hotBar}>
      <div className={styles.container}>
        <p className={`${styles.text} ${styles[type]}`}>{t('hotBar.home')}</p>
        <p className={`${styles.text} ${styles[type]}`}>{t('hotBar.shop')}</p>
        <p className={`${styles.text} ${styles[type]}`}>{t('hotBar.buyers')}</p>
        <p className={`${styles.text} ${styles[type]}`}>{t('hotBar.blog')}</p>
        <p className={`${styles.text} ${styles[type]}`}>{t('hotBar.contacts')}</p>
      </div>
    </div>
  );
}

export default HotBar;
