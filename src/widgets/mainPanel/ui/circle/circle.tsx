import style from "./circle.module.scss";
import React, { useRef, useEffect, useState } from "react";
import classNames from "classnames";
import type { THistoryDates } from "@shared/types/model";
import { v4 as uuidv4 } from "uuid";
import { gsap } from "gsap";
interface ICircle {
  data: THistoryDates[];
  periodIndex: number;
  setPeriodIndex: React.Dispatch<React.SetStateAction<number>>;
}
export const Circle = ({ data, periodIndex, setPeriodIndex }: ICircle) => {
  const circle = useRef<HTMLDivElement>(null);
  const [showTitle, setShowTitle] = useState(false);
  const [angleRotationInactiveElements, setAngleRotationInactiveElements] = useState(0);

  useEffect(() => {
    setShowTitle(false);
    const offsetDeg = -45 + (360 / data.length) * periodIndex;
    if (circle.current) {
      circle.current.style.transform = `rotate(${-offsetDeg - 45}deg)`;
      setAngleRotationInactiveElements(-offsetDeg - 45);
    }
    const timer = setTimeout(() => {
      setShowTitle(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [periodIndex, data.length]);

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    gsap.set(e.currentTarget, { x: "-=25", y: "-=25" });
    gsap.to(e.currentTarget, {
      duration: 0.5,
      scale: 1,
      ease: "power1.out",
      transformOrigin: "50% 50%",
    });
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    gsap.set(e.currentTarget, { x: "+=25", y: "+=25" });
    gsap.to(e.currentTarget, {
      duration: 0.5,
      scale: 1,
      ease: "power1.out",
      transformOrigin: "50% 50%",
    });
  };
  return (
    <div className={style.container} ref={circle}>
      {data.map((period, i) => {
        const isActive = periodIndex === i;
        // Задаём начальную точку на окружности (первый элемент всегда на одном месте)
        const degStartPoint = -45;
        // Рассчитываем смещение в зависимости от количества исторических периодов
        const offsetDeg = degStartPoint + (360 / data.length) * i;
        // Вычисляем координаты с учётом радиуса (265) и смещения кнопок
        const posX =
          265 * Math.cos((offsetDeg * Math.PI) / 180) +
          265 -
          (isActive ? 28 : 3);
        const posY =
          265 * Math.sin((offsetDeg * Math.PI) / 180) +
          265 -
          (isActive ? 28 : 3);
        return (
          <div className={style.periodPointWrap} key={uuidv4()}>
            <button
              className={classNames(
                isActive ? style.periodPoint : style.periodPointDot
              )}
              style={{
                transform: `translate(${posX}px, ${posY}px) ${
                  isActive
                    ? `rotate(${offsetDeg + 45}deg)`
                    : `rotate(${-angleRotationInactiveElements}deg)`
                }`,
              }}
              onClick={() => setPeriodIndex(i)}
              onMouseEnter={!isActive ? handleMouseEnter : undefined}
              onMouseLeave={!isActive ? handleMouseLeave : undefined}
              key={uuidv4()}
            >
              {i + 1}
              {showTitle && (
                <span className={style.periodTitle}>{period.title}</span>
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
};
