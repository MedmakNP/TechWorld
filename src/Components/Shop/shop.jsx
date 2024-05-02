import style from "./shop.module.css";
import useData from "../../Firebase/firebaseConfig";
import ProductCard from "../ProductCard/productCard";
import { useContext } from "react";
import { ThemeContext } from "../../Providers/ThemeProvider";

function Shop() {
  const { type } = useContext(ThemeContext);
  const data = useData("products");

  return (
    <div className={style.shop}>
      <div className={style.container}>
        <div className={`${style.searchPanel} ${style[type]}`}>
          <p className={style.text}>iPhone</p>
          <p className={style.text}>AppleWatch</p>
          <p className={style.text}>Accessories</p>
          <p className={style.titleFilter}>Filter</p>
          <div className={style.price}>Price</div>
        </div>
        <div className={style.ShopWrap}>
          <div className={style.titleWrap}>
            <p className={style.title}>Shop</p>
            <div className={style.sort}>sort by</div>
          </div>
          <div className={style.shopPanel}>
            {data.map((val, id) => (
              <div className={style.card}>
                <ProductCard key={id} data={val} />
                <div className={style.overlay}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
