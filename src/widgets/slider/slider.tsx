import React from "react";
import style from "./slider.module.scss";
import { v4 as uuidv4 } from "uuid";
import type { TFact } from "@shared/model";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Slide from "./ui/slide/slide";

import { Navigation as CustomNavigation } from "./ui/navigation/navigation";

const swiperParams = {
  // spaceBetween: 80,
  slidesPerView: 3,
};

export const Slider = (facts: TFact[]) => {
  return (
    <div className={style.container}>
      {facts?.length > 0 && (
        <Swiper
          {...swiperParams}
        >
          {facts.map((el) => (
            <SwiperSlide key={uuidv4()}>
              <div className={style.slide}>{<Slide year={el.year} fact={el.fact} />}</div>
            </SwiperSlide>
          ))}
          <CustomNavigation />
        </Swiper>
      )}
    </div>
  );
};
