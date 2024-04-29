import styles from "./hotBar.module.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Providers/ThemeProvider";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

function HotBar() {
  const { type } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div className={styles.hotBar}>
      <div className={styles.container}>
        <Link to="TechWorld/" className={`${styles.link} ${styles[type]}`}>
          {t("hotBar.home")}
        </Link>
        <Link to="/shopPage" className={`${styles.link} ${styles[type]}`}>
          {t("hotBar.shop")}
        </Link>
        <Link to="/buyersPage" className={`${styles.link} ${styles[type]}`}>
          {t("hotBar.buyers")}
        </Link>
        <Link to="/blogPage" className={`${styles.link} ${styles[type]}`}>
          {t("hotBar.blog")}
        </Link>
        <Link to="/contactsPage" className={`${styles.link} ${styles[type]}`}>
          {t("hotBar.contacts")}
        </Link>
      </div>
    </div>
  );
}

export default HotBar;
