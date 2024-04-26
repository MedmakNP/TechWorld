import { useContext, useState } from "react";
import style from "./slide.module.css";
import { ThemeContext } from "../../Providers/ThemeProvider";
function ProductSlide(props) {
  const { type } = useContext(ThemeContext);
  const { data } = props;
  const [activeImg, setActiveImg] = useState(0);
  const [activeCost, setActiveCost] = useState(0);

  const handdleClickImg = (index) => {
    setActiveImg(index);
  };
  const handdleClickCost = (index) => {
    setActiveCost(index);
  };
  return (
    <div className={`${style.container} ${style[type]}`}>
      <img className={style.img} src={data.img[activeImg]} alt="g" />
      <div className={style.line}></div>
      <p className={style.name}>{data.name}</p>
      <p className={style.cost}>$ {data.cost[activeCost]}.00</p>
      <div className={style.wrapper}>
        <div className={style.iconWrap}>
          {data.img.map((val, index) => (
            <div
              onClick={() => handdleClickImg(index)}
              className={`${style.borderIcon} ${index === activeImg ? style.active : ""}`}
            >
              <img className={style.icon} src={val} alt="g" />
            </div>
          ))}
        </div>
        <div className={style.iconWrap}>
          {data.parametr.map((val, index) => (
            <div
              onClick={() => handdleClickCost(index)}
              className={`${style.borderMemory} ${index === activeCost ? style.active : ""}`}
            >
              <p className={style.memory}>{val}</p>
            </div>
          ))}
        </div>
        <button className={style.btn}>Buy</button>
      </div>
    </div>
  );
}

export default ProductSlide;
