import styles from "./catalog.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import catalogData from "../../Storage/catalogData";
import ProductSlide from "./productSlide";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

function Catalog() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [slideCount, setSlideCount] = useState(4)
  const {t} = useTranslation()

  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      if (width <=1024){
        setSlideCount(3)
      }else{
        setSlideCount(4)
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);
  return (
    <div className={styles.catalog}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t('catalog.title')}</h1>
        <div className={styles.swiperWrap}>
          <Swiper spaceBetween={0} slidesPerView={slideCount}>
            {catalogData.map((val) => (
              <SwiperSlide>
                <ProductSlide data={val} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
