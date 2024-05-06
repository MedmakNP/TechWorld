import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./burgerMenu.module.css";
import { useTranslation } from "react-i18next";
import { BlurContext, ThemeContext } from "../../Providers/ThemeProvider";
import { RxCross2 } from "react-icons/rx";
function BurgerMenu() {
  const [open, setOpen] = useState('')
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const { type } = useContext(ThemeContext);
  const { toggleBlur } = useContext(BlurContext);
  const toggleMenu = () => {
    setOpen((prev) => (prev === "" ? "open" : ""))
    toggleBlur();
  };

  return (
    <div className={styles.burgerMenu}>
      <button className={styles.burgerIcon} onClick={toggleMenu}>
        ☰
      </button> 
        <div className={`${styles.menuItems} ${styles[open]}`}>
          <div className={styles.titleWrap}>
            <p className={styles.menuTitle}>{t("hotBar.menu")}</p>
            <RxCross2 size={24} onClick={toggleMenu} />
          </div>
          <Link to="TechWorld/" onClick={() => toggleBlur()} className={`${styles.link} ${styles[type]}`}>
            {t("hotBar.home")}
          </Link>
          <Link to="/shopPage" onClick={() => toggleBlur()} className={`${styles.link} ${styles[type]}`}>
            {t("hotBar.shop")}
          </Link>
          <Link to="/buyersPage" onClick={() => toggleBlur()} className={`${styles.link} ${styles[type]}`}>
            {t("hotBar.buyers")}
          </Link>
          <Link to="/blogPage" onClick={() => toggleBlur()} className={`${styles.link} ${styles[type]}`}>
            {t("hotBar.blog")}
          </Link>
          <Link to="/contactsPage" onClick={() => toggleBlur()} className={`${styles.link} ${styles[type]}`}>
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
        <div className={open === '' ? '' : styles.overlay}></div>
    </div>
  );
}

export default BurgerMenu;
