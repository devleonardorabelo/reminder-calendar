import { TDateFormat, TReminder, TWeather } from '../Entities';

export type TComponentProps = {
  children: React.ReactNode;
};
export type TCalendarProps = {
  days: TDateFormat[];
  selectedDay: TDateFormat | undefined;
  selectDay: (day: TDateFormat) => void;
};
export type TDashBoardProps = {
  selectedDay: TDateFormat | undefined;
};
export type TReminderProps = {
  reminder: TReminder;
  reminders: TReminder[];
  onClick: () => void;
};
export type TWeatherProps = {
  weather: TWeather | undefined;
  day: TDateFormat | undefined;
  loading: boolean;
};
export type TModalProps = {
  reminder?: TReminder;
  show: boolean;
  currentDay?: TDateFormat | undefined;
  closeAction: () => void;
};
export type TButton = {
  onClick: () => void;
  children?: JSX.Element;
  disabled?: boolean;
  title?: string;
  transparent?: boolean;
};
