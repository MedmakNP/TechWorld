import styles from "./hotBar.module.css";
import { ThemeContext } from "../../Providers/ThemeProvider";
import { useContext } from "react";
function HotBar() {
  const { type } = useContext(ThemeContext);
  return (
    <div className={styles.hotBar}>
      <div className={styles.container}>
        <p className={`${styles.text} ${styles[type]}`}>ГОЛОВНА</p>
        <p className={`${styles.text} ${styles[type]}`}>МАГАЗИН</p>
        <p className={`${styles.text} ${styles[type]}`}>ПОКУПЦЯМ</p>
        <p className={`${styles.text} ${styles[type]}`}>БЛОГ</p>
        <p className={`${styles.text} ${styles[type]}`}>КОНТАКТИ</p>
      </div>
    </div>
  );
}

export default HotBar;
