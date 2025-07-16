// home.tsx
import React, { useState } from "react";
import style from "./home.module.scss";
import { Slider } from "@widgets/slider/slider";
import { getHistoricalDates } from "@shared/api/api";
import Loader from "@shared/ui/loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { MainPanel } from "@widgets/mainPanel/mainPanel";
export const Home = () => {
  const [periodId, setPeriodId] = useState<string | undefined>();
  const { isPending, error, data } = useQuery({
    queryKey: [""],
    queryFn: () =>
      getHistoricalDates().then((data) => {
        setPeriodId(data[0].id);
        return data;
      }),
  });
  return (
    <div className={style.container}>
      {isPending ? (
        <div className={style.loader}>
          <Loader />
        </div>
      ) : data && !error ? (
        <>
          <MainPanel data={data} periodId={periodId} setPeriodId={setPeriodId} />
          <Slider facts={data.find((el) => el.id === periodId)?.facts} />
          <div className={style.lineCenter}></div>
        </>
      ) : (
        <div className={style.error}>
          Что-то пошло не так. Обновите страницу.
        </div>
      )}
    </div>
  );
};