export type TFact = {
  year: string;
  fact: string;
};

export type THistoryDates = {
  title: string;
  period: string;
  id: string;
  facts: TFact[];
};
