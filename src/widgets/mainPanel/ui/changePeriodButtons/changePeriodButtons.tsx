import style from "./changePeriodButtons.module.scss";
import React from "react";
import classNames from "classnames";
import type { THistoryDates } from "@shared/types/model";

interface IChangePeriodButtons {
  data: THistoryDates[];
  periodIndex: number;
  setPeriodIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const ChangePeriodButtons = ({data, periodIndex, setPeriodIndex}: IChangePeriodButtons) => {
  return (
    <div className={style.container}>
      <div className={style.periodNumber}>
        {(periodIndex + 1).toString().padStart(2, "0")}/
        {data.length.toString().padStart(2, "0")}
      </div>
      <div>
        <button
          className={classNames(
            style.buttonLeft,
            periodIndex === 0 && style.disabled
          )}
          onClick={() => {
            if (periodIndex === 0) return;
            setPeriodIndex(periodIndex - 1);
          }}
        ></button>
        <button
          className={classNames(
            style.buttonRight,
            periodIndex === data.length - 1 && style.disabled
          )}
          onClick={() => {
            if (periodIndex === data.length - 1) return;
            setPeriodIndex(periodIndex + 1);
          }}
        ></button>
      </div>
    </div>
  );
};
