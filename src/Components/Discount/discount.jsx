import { useTranslation } from "react-i18next";
import styles from "./discount.module.css";

function Discount() {
  const { t } = useTranslation();
  return (
    <div className={styles.discount}>
      <div className={styles.overlay}></div>
      <p className={styles.title}>{t("discount.title")}</p>
      <button className={styles.btn}>{t("discount.btn")}</button>
    </div>
  );
}

export default Discount;
