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
      if (width <= 768) {
        setSlideCount(2);
      } else if (width <= 1024) {
        setSlideCount(3);
      } else {
        setSlideCount(4);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.catalog}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t("catalog.title")}</h1>
        <div className={styles.swiperWrap}>
          <Swiper
            spaceBetween={30}
            slidesPerView={slideCount}
            className={styles.swiper}
          >
            {data.map((val, id) => (
              <SwiperSlide key={id}>
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
