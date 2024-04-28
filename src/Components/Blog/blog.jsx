import style from "./blog.module.css";
import camera from "../../images/modern-camera.jpg";
import health from "../../images/monitor-your-health.jpg";
import music from "../../images/online-music-service.jpg";
import { ThemeContext } from "../../Providers/ThemeProvider";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

function Blog() {
  const { t } = useTranslation();
  const { type } = useContext(ThemeContext);
  return (
    <div className={style.container}>
      <p className={style.title}>{t("blog.title")}</p>
      <div className={style.blogWrap}>
        <div className={style.blog}>
          <img className={style.img} src={camera} alt="camera" />
          <div className={`${style.textWrap} ${style[type]}`}>
            <p className={style.titleContent}>{t("blog.titlecard1")}</p>
            <p className={style.text}>{t("blog.text1")}</p>
            <div className={style.linkWrap}>
              <p className={style.link}>{t("blog.details")}</p>
              <span className={style.contentButtonArrow}>→</span>
            </div>
          </div>
        </div>
        <div className={style.blog}>
          <img className={style.img} src={music} alt="music" />
          <div className={`${style.textWrap} ${style[type]}`}>
            <p className={style.titleContent}>{t("blog.titlecard2")}</p>
            <p className={style.text}>{t("blog.text2")}</p>
            <div className={style.linkWrap}>
              <p className={style.link}>{t("blog.details")}</p>
              <span className={style.contentButtonArrow}>→</span>
            </div>
          </div>
        </div>
        <div className={style.blog}>
          <img className={style.img} src={health} alt="health" />
          <div className={`${style.textWrap} ${style[type]}`}>
            <p className={style.titleContent}>{t("blog.titlecard3")}</p>
            <p className={style.text}>{t("blog.text3")}</p>
            <div className={style.linkWrap}>
              <p className={style.link}>{t("blog.details")}</p>
              <span className={style.contentButtonArrow}>→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
