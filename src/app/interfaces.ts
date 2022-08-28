export interface CalenderDataInterFace {
  year: number | undefined;
  month: { name: string; days: { days: number }[] } | any;
}

export interface Appointments {
  age: string;
  date: string;
  gender: string;
  name: string;
  time: string;
}
