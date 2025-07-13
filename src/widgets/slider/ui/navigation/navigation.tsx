import style from "./navigation.module.scss";
import React from "react";
import { useSwiper } from "swiper/react";
import nextSvg from "../icons/next.svg";

export const Navigation = () => {
  const swiper = useSwiper();
  return (
    <>
      <div className={style.next} onClick={() => swiper.slideNext()}>
        <img src={nextSvg} className={style.img} alt="next" />
      </div>
      <div className={style.prev} onClick={() => swiper.slidePrev()}>
        <img src={nextSvg} className={style.img} alt="prev" />
      </div>
    </>
  );
};
