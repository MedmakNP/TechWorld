import styles from "./categoryShop.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import categoryData from "../../Storage/categoryData";
import { ThemeContext } from "../../Providers/ThemeProvider";
import { useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function CategoryShop() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [slideCount, setSlideCount] = useState(3);
  const { type } = useContext(ThemeContext);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      if (width <= 768) {
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
  console.log(windowWidth, slideCount);
  return (
    <div className={styles.categoryShop}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t("category.title")}</h1>
        <Swiper spaceBetween={30} slidesPerView={slideCount}>
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
