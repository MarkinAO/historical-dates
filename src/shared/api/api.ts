import mockData from "./mock";
import type { THistoryDates } from "@shared/types/model";

//Функция имитирующая запрос на сервер
export const getHistoricalDates = (): Promise<THistoryDates[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 0);
  });
};
