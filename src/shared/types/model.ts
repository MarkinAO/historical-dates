export type TFact = {
  year: number;
  fact: string;
};

export type THistoryDates = {
  title: string;
  id: string;
  facts: TFact[];
};
