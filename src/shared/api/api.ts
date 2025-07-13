import mockData from "./mock";
import type { TFact } from "@shared/model";

//Функция имитирующая запрос на сервер
export const getHistoricalDates = (): Promise<TFact[][]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 0);
  });
};
