import React from "react";
import style from "./mainPanel.module.scss";
import type { THistoryDates } from "@shared/types/model";
import { Dates } from "./ui/dates/dates";
import { ChangePeriodButtons } from "./ui/changePeriodButtons/changePeriodButtons";
import { Circle } from "./ui/circle/circle";

interface IMainPanelProps {
  data: THistoryDates[];
  periodIndex: number;
  setPeriodIndex: (value: React.SetStateAction<number>) => void;
}
export const MainPanel = ({
  data,
  periodIndex,
  setPeriodIndex,
}: IMainPanelProps) => {
  const carrentPeriodData = data[periodIndex]?.facts;
  const periodStart = Math.min(...carrentPeriodData.map((fact) => fact.year));
  const periodEnd = Math.max(...carrentPeriodData.map((fact) => fact.year));

  return (
    <div className={style.container}>
      <h1 className={style.title}>Исторические даты</h1>
      <div className={style.period}>
        <Dates newStartDate={periodStart} newEndDate={periodEnd} />
        <Circle
          data={data}
          periodIndex={periodIndex}
          setPeriodIndex={setPeriodIndex}
        />
      </div>
      <div className={style.changePeriodButtonsWrap}>
        <ChangePeriodButtons
          data={data}
          periodIndex={periodIndex}
          setPeriodIndex={setPeriodIndex}
        />
      </div>
    </div>
  );
};
