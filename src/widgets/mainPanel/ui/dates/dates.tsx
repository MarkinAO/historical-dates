import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import style from "./dates.module.scss";
interface IDates {
  newStartDate: number;
  newEndDate: number;
}
export const Dates = ({ newStartDate, newEndDate }: IDates) => {
  const [currentStart, setCurrentStart] = useState(newStartDate);
  const [currentEnd, setCurrentEnd] = useState(newEndDate);
  const startRef = useRef<HTMLSpanElement>(null);
  const endRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!startRef.current || !endRef.current) return;

    const startCounter = { value: currentStart };
    const endCounter = { value: currentEnd };
    gsap.to(startCounter, {
      duration: 1,
      value: newStartDate,
      ease: "none",
      onUpdate: () => {
        if (startRef.current) {
          startRef.current.innerText = Math.floor(
            startCounter.value
          ).toString();
        }
      },
      onComplete: () => {
        setCurrentStart(newStartDate);
      },
    });
    gsap.to(endCounter, {
      duration: 1,
      value: newEndDate,
      ease: "none",
      onUpdate: () => {
        if (endRef.current) {
          endRef.current.innerText = Math.floor(endCounter.value).toString();
        }
      },
      onComplete: () => {
        setCurrentEnd(newEndDate);
      },
    });
  }, [newStartDate, newEndDate]);
  return (
    <>
      <span className={style.newStartDate} ref={startRef}>
        {currentStart}
      </span>
      <span className={style.newEndDate} ref={endRef}>
        {currentEnd}
      </span>
    </>
  );
};
