import React, { useEffect, useState } from "react";
import style from "./home.module.scss";
import classNames from "classnames";
import { Slider } from "@widgets/slider/slider";
import { getHistoricalDates } from "@shared/api/api";
import { TFact } from "@shared/model";
import Loader from "@shared/ui/loader/Loader";
import { useQuery } from "@tanstack/react-query";

export const Home = () => {
  const [timeSlot, setTimeSlot] = useState(0);
  const { isPending, error, data } = useQuery({
    queryKey: [""],
    queryFn: () => getHistoricalDates(),
  });

  return (
    <div className={style.container}>
      {isPending ? (
        <div className={style.loder}>
          <Loader />
        </div>
      ) : data && !error ? (
        Slider(data[timeSlot])
      ) : (
        <div className={style.error}>
          Что-то пошло не так. Обновите страницу.
        </div>
      )}
    </div>
  );
};
