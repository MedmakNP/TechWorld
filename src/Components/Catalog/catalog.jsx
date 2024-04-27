import styles from "./catalog.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import catalogData from "../../Storage/catalogData";
import ProductSlide from "./productSlide";
import { useTranslation } from "react-i18next";

function Catalog() {
  const {t} = useTranslation()
  return (
    <div className={styles.catalog}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t('catalog.title')}</h1>
        <div className={styles.swiperWrap}>
          <Swiper spaceBetween={0} slidesPerView={4}>
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
