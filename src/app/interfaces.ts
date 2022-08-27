export interface CalenderDataInterFace {
  year: number | undefined;
  month: { name: string; days: { days: number }[] } | any;
}
