import styles from "./catalog.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/productCard";
import useData from "../../Firebase/firebaseConfig";
function Catalog() {
  const [slideCount, setSlideCount] = useState(4);
  const data = useData("products");
  const { t } = useTranslation(); 

  useEffect(() => {
      const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 580) {
        setSlideCount(1);
      } else if (width <= 900) {
        setSlideCount(2);
      } else if (width <= 1200) {
        setSlideCount(3);
      } else {
        setSlideCount(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={styles.catalog}>
      <h1 className={styles.title}>{t("catalog.title")}</h1>
      <div className={styles.container}>
        <div className={styles.swiperWrap}>
          <Swiper slidesPerView={slideCount} className={styles.swiper}>
            {data.map((val, id) => (
              <SwiperSlide key={id} className={styles.slideWrap}>
                <ProductCard data={val} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
