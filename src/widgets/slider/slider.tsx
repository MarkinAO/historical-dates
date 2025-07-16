import React, { useState } from "react";
import style from "./slider.module.scss";
import { v4 as uuidv4 } from "uuid";
import type { TFact } from "@shared/types/model";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Slide from "./ui/slide/slide";

const swiperParams = {
  modules: [Pagination],

  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 25,
      pagination: { clickable: true },
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 80,
      pagination: false,
    },
  },
};

interface SliderProps {
  facts: TFact[];
}

export const Slider: React.FC<SliderProps> = ({ facts = [] }) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const onSwiper = (swiper: SwiperClass) => {
    setSwiperRef(swiper);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  const onSlideChange = (swiper: SwiperClass) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  return (
    <div className={style.container}>
      {facts.length > 0 && (
        <>
          <Swiper
            {...swiperParams}
            onSwiper={onSwiper}
            onSlideChange={onSlideChange}
          >
            {facts.map((el) => (
              <SwiperSlide key={uuidv4()}>
                <Slide year={el.year} fact={el.fact} />
              </SwiperSlide>
            ))}
          </Swiper>
          {!isBeginning && (
            <div
              className={style.prev}
              onClick={() => swiperRef?.slidePrev()}
            ></div>
          )}
          {!isEnd && (
            <div
              className={style.next}
              onClick={() => swiperRef?.slideNext()}
            ></div>
          )}
        </>
      )}
    </div>
  );
};
