import styles from "./categoryShop.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import categoryData from "../../Storage/categoryData";
import { ThemeContext } from "../../Providers/ThemeProvider";
import { useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function CategoryShop() {
  const [slideCount, setSlideCount] = useState(3);
  const { type } = useContext(ThemeContext);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 700) {
        setSlideCount(1);
      } else if (width <= 900) {
        setSlideCount(2);
      } else {
        setSlideCount(3);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={styles.categoryShop}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t("category.title")}</h1>
        <Swiper className={styles.swiper} slidesPerView={slideCount}>
          {categoryData.map((val) => (
            <SwiperSlide key={val.id} className={styles.slideWrap}>
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
