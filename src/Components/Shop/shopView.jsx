import style from "./shop.module.css";
import ProductCard from "../ProductCard/productCard";
import { useContext } from "react";
import { ThemeContext } from "../../Providers/ThemeProvider";

function ShopView({
  currentData,
  handleSortType,
  activeType,
  handleReturn,
  onInputChangeMax,
  onInputChangeMin,
  filterCost,
  handleSort,
}) {
  const { type } = useContext(ThemeContext);

  const handleChangeMin = (event) => {
    const cost = event.target.value;
    onInputChangeMin(cost);
  };
  const handleChangeMax = (event) => {
    const cost = event.target.value;
    onInputChangeMax(cost);
  };
  return (
    <div className={style.shop}>
      <div className={style.container}>
        <div className={`${style.searchPanel} ${style[type]}`}>
          <p
            onClick={handleReturn}
            className={`${style.return} ${"" !== activeType ? style.active : ""}`}
          >
            All categories
          </p>
          <p
            onClick={() => handleSortType("iPhone")}
            className={`${style.text} ${"iPhone" === activeType ? style.active : ""}`}
          >
            iPhone
          </p>
          <p
            onClick={() => handleSortType("appleWatch")}
            className={`${style.text} ${"appleWatch" === activeType ? style.active : ""}`}
          >
            AppleWatch
          </p>
          <p
            onClick={() => handleSortType("accessories")}
            className={`${style.text} ${"accessories" === activeType ? style.active : ""}`}
          >
            Accessories
          </p>
          <p className={style.titleFilter}>Filter</p>
          <div className={style.priceBar}>
            <p className={style.price}>Price</p>
            <div className={style.inputWrap}>
              <input
                className={style.input}
                placeholder={0}
                onChange={handleChangeMin}
              />
              <p>-</p>
              <input
                className={style.input}
                placeholder={0}
                onChange={handleChangeMax}
              />
              <button className={style.btn} onClick={filterCost}>
                Ok
              </button>
            </div>
          </div>
        </div>
        <div className={style.ShopWrap}>
          <div className={style.titleWrap}>
            <p className={style.title}>Shop</p>
            <button className={style.sort} onClick={handleSort}>
              sort
            </button>
          </div>
          <div className={style.shopPanel}>
            {currentData.map((val, id) => (
              <div className={style.card}>
                <ProductCard key={id} data={val} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopView;
