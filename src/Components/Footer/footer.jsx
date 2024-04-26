import styles from "./footer.module.css";
import facebook from "../../images/icons/faceBook.png";
import viber from "../../images/icons/viber.png";
import telegram from "../../images/icons/telegram.png";
import whatsapp from "../../images/icons/whatsapp.png";
import instagam from "../../images/icons/instagam.png";
import twitter from "../../images/icons/twitter.png";
import { ThemeContext } from "../../Providers/ThemeProvider";
import { useContext } from "react";

function Footer() {
  const { type } = useContext(ThemeContext);
  return (
    <div className={styles.footer}>
      <p className={`${styles.title} ${styles[type]}`}>
        <b>TECH</b> WORLD
      </p>
      <p className={styles.textConnect}>+38 (066) 000 00 00</p>
      <p className={styles.textConnect}>example@mail.com</p>
      <p className={styles.text}>Ми в соціальних мережах</p>
      <div className={styles.iconWrap}>
        <a href="https://www.facebook.com/">
          <div className={styles.icon}>
            <img src={facebook} alt="facebook" />
          </div>
        </a>
        <a href="https://www.instagram.com/">
          <div className={styles.icon}>
            <img src={instagam} alt="instagam" />
          </div>
        </a>
        <a href="https://chats.viber.com/eng">
          <div className={styles.icon}>
            <img src={viber} alt="viber" />
          </div>
        </a>
        <a href="https://web.telegram.org">
          <div className={styles.icon}>
            <img src={telegram} alt="telegram" />
          </div>
        </a>
        <a href="https://twitter.com/">
          <div className={styles.icon}>
            <img src={twitter} alt="twitter" />
          </div>
        </a>
        <a href="https://web.whatsapp.com/">
          <div className={styles.icon}>
            <img src={whatsapp} alt="whatsapp" />
          </div>
        </a>
      </div>
      <p>Gadget Store © 2024</p>
    </div>
  );
}

export default Footer;
