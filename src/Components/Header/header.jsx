import styles from "./header.module.css";
import leng from "../../images/leng.png";
import login from "../../images/login.png";
import basket from "../../images/basket.png";
import { ThemeContext } from "../../Providers/ThemeProvider";
import { useContext } from "react";
import { FaMoon } from "react-icons/fa";

function Header() {
  const { toggleTheme } = useContext(ThemeContext);
  const { type } = useContext(ThemeContext);
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <p className={styles.logo}>
          <b>TECH </b>WORLD
        </p>
        <input className={styles.searchInput} placeholder="Пошук" />
        <div className={styles.layoutWrap}>
          <img className={styles.img} src={leng} alt="leng" />
          <p className={styles.switch}>UK</p>
          <p className={styles.switch}> | </p>
          <p className={styles.switch}>EN</p>
        </div>
        <FaMoon
          size={24}
          className={`${styles.switchTheme} ${styles[type]}`}
          onClick={toggleTheme}
        />
        <div className={styles.layoutWrap}>
          <img src={login} alt="log" />
          <p className={styles.switch}>Увійти</p>
        </div>
        <img className={styles.basket} src={basket} alt="basket" />
      </div>
    </div>
  );
}

export default Header;
