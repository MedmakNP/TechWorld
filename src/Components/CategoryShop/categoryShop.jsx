import styles from "./categoryShop.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import categoryData from "../../Storage/categoryData";
import { ThemeContext } from "../../Providers/ThemeProvider";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

function CategoryShop() {
  const { type } = useContext(ThemeContext);
  const {t} = useTranslation()
  return (
    <div className={styles.categoryShop}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t('category.title')}</h1>
        <Swiper spaceBetween={30} slidesPerView={3}>
          {categoryData.map((val) => (
            <SwiperSlide>
              <div className={`${styles.slide} ${styles[type]}`}>
                <img className={styles.img} src={val.img} alt={val.text} />
                <button className={styles.btn}> {val.text} </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CategoryShop;
