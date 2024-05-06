import style from './product.module.css'
import useData from '../../Firebase/firebaseConfig';
import { BlurContext } from '../../Providers/ThemeProvider';
import { useContext, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';

function Product({ id }) {
    const data = useData("products");
    const [activeCost, setActiveCost] = useState(0);
    const [count, setCount] = useState(1)
    const [activeIcon, setActiveIcon] = useState('')
    const swiperRef = useRef(null);
    const currData = data[id] || {};
    const { isBlurred } = useContext(BlurContext)

    const handdleColorChenge =(slideIndex) =>{
        swiperRef.current.swiper.slideTo(slideIndex);
        setActiveIcon(slideIndex)
    }
    const handdleCostChenge =(index) =>{
        setActiveCost(index)
    }
    const handdleCount = (val) => {
        if(val === 0 && count > 1){
            setCount(count - 1)
        }
        if(val === 1){
            setCount(count + 1) 
        }
    }
    return (
      <div className={`${style.product} ${style[isBlurred]}`}>
         {currData.name && currData.name.length > 0 && ( 
        <div className={style.container}>
          <div className={style.swiperWrap}>
           
              <Swiper 
              className={style.swiper}
              modules={[Navigation]}
              ref={swiperRef}
              spaceBetween={50}
              navigation={true} 
                slidesPerView={1}
              >
                {currData.img.map((val, index) => (
                  <SwiperSlide key={index}>
                    <img className={style.img} src={val} alt='img'/>  
                  </SwiperSlide>
                ))}
              </Swiper>
            
          </div>
          <div className={style.infoWrap}>
            <h2 className={style.name}>{currData.name}</h2>
            <div className={style.line}></div>
            <p className={style.id}>SKU: <b>{`${currData.id}-${currData.name}`}</b></p>
            <p>Manufacturer: <b>Apple</b></p>
            <p className={style.cost}>$ {currData.cost[activeCost]}.00</p>
            <p className={style.title}>Color</p>
            <div className={style.iconWrap}>
              {currData.img.map((val, index) => (
                <div key={index} onClick={() => handdleColorChenge(index)} className={ `${style.icon} ${index === activeIcon ? style.active : ""}`}>
                    <img className={style.iconImg} src={val} alt='icon' />
                </div>
              ))}   
            </div>
            <p className={style.title}>Memory</p>
            <div className={style.iconWrap}>
              {currData.Memory.map((val, index) => (
                <div key={index} onClick={() => handdleCostChenge(index)} className={ `${style.icon} ${index === activeCost ? style.active : ""}`}>
                    <p className={style.memory}>{val}</p>
                </div>
              ))}   
            </div>
            <div className={style.buyWrap}>
                <div className={style.counter}>
                  <p onClick={() => handdleCount(0)} className={`${style.counterInner} ${count === 1 ? style.dis : ''}`}><b> - </b></p>  
                  <p className={style.counterInner}>{count}</p>
                  <p onClick={() => handdleCount(1)} className={style.counterInner}><b> + </b></p>
                </div>
                <button className={style.btn}>buy</button>
            </div>
            <div className={style.characteriscticsWrap}>
              <p className={style.titleCharacterisctic}>Characterisctics</p>
              {currData.characterisctics.map((val, index) =>(
                <div key={index} className={style.characterisctic}>
                  <p className={style.nameChar}>{val[0]}</p>
                  <p className={style.textChar}>{val[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        )}
      </div>
    );
  }
export default Product;