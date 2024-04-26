import style from "./blog.module.css";
import camera from "../../images/modern-camera.jpg";
import health from "../../images/monitor-your-health.jpg";
import music from "../../images/online-music-service.jpg";
import { ThemeContext } from "../../Providers/ThemeProvider";
import { useContext } from "react";

function Blog() {
  const { type } = useContext(ThemeContext);
  return (
    <div className={style.container}>
      <p className={style.title}>Блог</p>
      <div className={style.blogWrap}>
        <div className={style.blog}>
          <img className={style.img} src={camera} alt="camera" />
          <div className={`${style.textWrap} ${style[type]}`}>
            <p className={style.titleContent}>Modern camera</p>
            <p className={style.text}>
              Take incredible photos with the redesigned 12MP camera
            </p>
            <div className={style.linkWrap}>
              <p className={style.link}>DETAILS</p>
              <span className={style.contentButtonArrow}>→</span>
            </div>
          </div>
        </div>
        <div className={style.blog}>
          <img className={style.img} src={music} alt="music" />
          <div className={`${style.textWrap} ${style[type]}`}>
            <p className={style.titleContent}>Online music service</p>
            <p className={style.text}>
              Listen to music wherever you like in the new app
            </p>
            <div className={style.linkWrap}>
              <p className={style.link}>DETAILS</p>
              <span className={style.contentButtonArrow}>→</span>
            </div>
          </div>
        </div>
        <div className={style.blog}>
          <img className={style.img} src={health} alt="health" />
          <div className={`${style.textWrap} ${style[type]}`}>
            <p className={style.titleContent}>Monitor your health</p>
            <p className={style.text}>
              On a walk, at work, always monitoring your condition
            </p>
            <div className={style.linkWrap}>
              <p className={style.link}>DETAILS</p>
              <span className={style.contentButtonArrow}>→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
