export type TDateFormat = {
  day: number;
  month: number;
  year: number;
  dayOfWeek: number;
};
export type TReminder = {
  title: string;
  color: string;
};
export type TDay = {
  date: TDateFormat;
  reminder: TReminder[];
};
