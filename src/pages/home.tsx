import React, { useState } from "react";
import style from "./home.module.scss";
import { Slider } from "@widgets/slider/slider";
import { getHistoricalDates } from "@shared/api/api";
import Loader from "@shared/ui/loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { MainPanel } from "@widgets/mainPanel/mainPanel";
import { ChangePeriodButtons } from "@widgets/mainPanel/ui/changePeriodButtons/changePeriodButtons";

export const Home = () => {
  const [periodIndex, setPeriodIndex] = useState<number>(0);
  const { isPending, error, data } = useQuery({
    queryKey: [""],
    queryFn: () => getHistoricalDates(),
  });
  return (
    <div className={style.container}>
      {isPending ? (
        <div className={style.loader}>
          <Loader />
        </div>
      ) : data && !error ? (
        <div className={style.contentWrap}>
          <MainPanel
            data={data}
            periodIndex={periodIndex}
            setPeriodIndex={setPeriodIndex}
          />
          <Slider facts={data[periodIndex]?.facts} />
          <div className={style.changePeriodButtons} >
            <ChangePeriodButtons
              data={data}
              periodIndex={periodIndex}
              setPeriodIndex={setPeriodIndex}
            />
          </div>
        </div>
      ) : (
        <div className={style.error}>
          Что-то пошло не так. Обновите страницу.
        </div>
      )}
    </div>
  );
};
