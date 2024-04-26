import styles from "./discount.module.css";

function Discount() {
  return (
    <div className={styles.discount}>
      <div className={styles.overlay}></div>
      <p className={styles.title}>ЗНИЖКИ НА АКСЕСУАРИ</p>
      <button className={styles.btn}>Дивитись</button>
    </div>
  );
}

export default Discount;
