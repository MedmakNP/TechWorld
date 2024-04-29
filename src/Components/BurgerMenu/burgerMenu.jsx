import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./burgerMenu.module.css";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../Providers/ThemeProvider";
import { RxCross2 } from "react-icons/rx";
function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const { type } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burgerMenu}>
      <button className={styles.burgerIcon} onClick={toggleMenu}>
        ☰
      </button>
      {isOpen && (
        <div className={styles.menuItems}>
          <div className={styles.titleWrap}>
            <p className={styles.menuTitle}>{t("hotBar.menu")}</p>
            <RxCross2 size={24} onClick={toggleMenu} />
          </div>
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
          <p className={styles.title}>{t("hotBar.languages")}</p>
          <p
            onClick={() => i18n.changeLanguage("ua")}
            className={`${styles.link} ${styles[type]}`}
          >
            UA
          </p>
          <p
            onClick={() => i18n.changeLanguage("en")}
            className={`${styles.link} ${styles[type]}`}
          >
            EN
          </p>
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
