import styles from "./header.module.css";
import leng from "../../images/leng.png";
import login from "../../images/login.png";
import { useTranslation } from "react-i18next";
import { BlurContext, ThemeContext } from "../../Providers/ThemeProvider";
import { useContext } from "react";
import { FaMoon } from "react-icons/fa";
import BurgerMenu from "../BurgerMenu/burgerMenu";
import Search from "../Search/search";
import Basket from "../Basket/basket";

function Header() {
  const { toggleTheme } = useContext(ThemeContext);
  const { type } = useContext(ThemeContext);
  const { isBlurred } = useContext(BlurContext)
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  return (
    <div className={styles.header}> 
      <div className={styles.headerInner}>
        <BurgerMenu />
        <div className={`${styles.container} ${styles[isBlurred]}`}>
          <p className={styles.logo}>
            <b>TECH </b>WORLD
          </p>
          <div className={styles.searchInner}>
            <Search />
          </div>
          <div className={styles.layoutWrap}>
            <img className={styles.img} src={leng} alt="leng" />
            <p
              onClick={() => i18n.changeLanguage("ua")}
              className={styles.switch}
            >
              UA
            </p>
            <p className={styles.switch}> | </p>
            <p
              onClick={() => i18n.changeLanguage("en")}
              className={styles.switch}
            >
              EN
            </p>
          </div>
          <FaMoon
            size={24}
            className={`${styles.switchTheme} ${styles[type]}`}
            onClick={toggleTheme}
          />
          <div className={styles.layoutWrap}>
            <img src={login} alt="log" />
            <p className={styles.login}>{t("header.login")} </p>
          </div>
        </div>
        <Basket />
      </div>
      <div className={`${styles.search} ${styles[isBlurred]}`}>
        <Search />
      </div>
    </div>
  );
}

export default Header;
