import React, { useState } from "react";
import style from "./home.module.scss";
import { Slider } from "@widgets/slider/slider";
import { getHistoricalDates } from "@shared/api/api";
import Loader from "@shared/ui/loader/Loader";
import { useQuery } from "@tanstack/react-query";

export const Home = () => {
  const [periodId, setPeriodId] = useState<String>();
  const { isPending, error, data } = useQuery({
    queryKey: [""],
    queryFn: () => getHistoricalDates().then(data => {
      setPeriodId(data[0].id);
      return data;
    }),
  });

  return (
    <div className={style.container}>
      {isPending ? (
        <div className={style.loder}>
          <Loader />
        </div>
      ) : data && !error ? (
        <Slider facts={data.find((el) => el.id === periodId).facts}/>
        
      ) : (
        <div className={style.error}>
          Что-то пошло не так. Обновите страницу.
        </div>
      )}
    </div>
  );
};
