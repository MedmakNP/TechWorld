import styles from "./intro.module.css";

function Intro() {
  return (
    <div className={styles.slider}>
      <div className={styles.overlay}></div>
      <div className={styles.infoWrap}>
        <p className={styles.title}>IPHONE 14 PRO</p>
        <p className={styles.text}>
          Революційна система трьох камер - набагато більше можливостей та
          незмінна простота у використані
        </p>
        <button className={styles.btn}>До каталогу</button>
      </div>
    </div>
  );
}

export default Intro;
