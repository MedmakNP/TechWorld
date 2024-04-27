import styles from "./header.module.css";
import leng from "../../images/leng.png";
import login from "../../images/login.png";
import basket from "../../images/basket.png";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from "../../Providers/ThemeProvider";
import { useContext } from "react";
import { FaMoon } from "react-icons/fa";

function Header() {
  const { toggleTheme } = useContext(ThemeContext);
  const { type } = useContext(ThemeContext);
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <p className={styles.logo}>
          <b>TECH </b>WORLD
        </p>
        <input className={styles.searchInput} placeholder={t('header.input')} />
        <div className={styles.layoutWrap}>
          <img className={styles.img} src={leng} alt="leng" />
          <p onClick={() => i18n.changeLanguage('ua')} className={styles.switch}>UK</p>
          <p className={styles.switch}> | </p>
          <p onClick={() => i18n.changeLanguage('en')} className={styles.switch}>EN</p>
        </div>
        <FaMoon
          size={24}
          className={`${styles.switchTheme} ${styles[type]}`}
          onClick={toggleTheme}
        />
        <div className={styles.layoutWrap}>
          <img src={login} alt="log" />
          <p className={styles.login}>{t('header.login')} </p>
        </div>
        <img className={styles.basket} src={basket} alt="basket" />
      </div>
    </div>
  );
}

export default Header;
