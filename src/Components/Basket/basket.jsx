import { useContext, useState } from "react";
import basket from "../../images/basket.png";
import empty from "../../images/emptyBusket.png";
import style from "./basket.module.css";
import { BlurContext } from "../../Providers/ThemeProvider";
function Basket() {
  const [open, setOpen] = useState("");
  const { toggleBlur } = useContext(BlurContext);

  const henddleClick = () => {
    setOpen((prev) => (prev === "" ? "open" : ""));
    toggleBlur();
  };
  return (
    <div className={style.container}>
      <img
        onClick={henddleClick}
        className={style.basket}
        src={basket}
        alt="basket"
      />
      <div className={`${style.basketMenu} ${style[open]}`}>
        <p className={style.title}>Shopping cart</p>
        <div className={style.basketInner}>
          <img className={style.emptyImg} src={empty} alt="empty" />
          <p className={style.text}>Your shopping cart is empty.</p>
          <button onClick={henddleClick} className={style.btn}>
            Continue shopping
          </button>
        </div>
      </div>
      <div className={open === "" ? "" : style.overlay}></div>
    </div>
  );
}

export default Basket;
