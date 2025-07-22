import React, { useState } from "react";
import style from "./slide.module.scss";
import type { TFact } from "@shared/types/model";
import classNames from "classnames";

const Slide = ({ year, fact }: TFact) => {
  const limitedText =
    fact?.length > 100 ? fact.slice(0, 100).trim() + "..." : fact;
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div
      className={style.container}
      onClick={() => setIsHidden(!isHidden)}
      onTouchStart={() => setIsHidden(!isHidden)}
    >
      <div className={style.year}>{year}</div>
      <div
        className={
          fact?.length > 100
            ? classNames(style.text, style.limited)
            : style.text
        }
      >
        {isHidden ? limitedText : fact}
      </div>
    </div>
  );
};
export default Slide;
