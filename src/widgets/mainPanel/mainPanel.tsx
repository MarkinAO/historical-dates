// mainPanel.tsx
import React from "react";
import style from "./mainPanel.module.scss";
import type { THistoryDates } from "@shared/types/model";
interface IMainPanelProps {
  data: THistoryDates[];
  periodId: string;
  setPeriodId: (value: React.SetStateAction<string>) => void;
}
export const MainPanel = ({ data, periodId, setPeriodId }: IMainPanelProps) => {
  const carrentPeriodData = data.find((el) => el.id === periodId)?.facts;
  const periodStart = Math.min(...carrentPeriodData.map((fact) => fact.year));
  const periodEnd = Math.max(...carrentPeriodData.map((fact) => fact.year));

  return (
    <div className={style.container}>
      <h1 className={style.title}>Исторические даты</h1>      
      <div className={style.period}>
          <span className={style.periodStart}>{periodStart}</span>
          <span className={style.periodEnd}>{periodEnd}</span>
          <div className={style.circle}>
            
          <div className={style.line}></div>
          </div>
        </div>
    </div>
  );
};
