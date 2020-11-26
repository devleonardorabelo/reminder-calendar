import { type } from 'os';

export type TButton = {
  onClick: () => void;
  children?: JSX.Element;
  disabled?: boolean;
  title?: string;
  transparent?: boolean;
};

export type TDateFormat = {
  day: number;
  month: number;
  year: number;
  dayOfWeek: number;
};
export type TReminder = {
  id: number;
  title: string;
  color: string;
  city: string;
  date: TDateFormat;
  hour: string;
};
export type TComponentProps = {
  children: React.ReactNode;
};
export type TCalendarContext = {
  calendar: TDateFormat[];
  selectedDay: TDateFormat | undefined;
  createCalendar: (month: number, year: number) => void;
  selectDay: (day: TDateFormat) => void;
  navigateBetweenDates: (month: number) => void;
};
export type TCalendarProps = {
  days: TDateFormat[];
  selectedDay: TDateFormat | undefined;
  selectDay: (day: TDateFormat) => void;
};
export type TReminderContext = {
  reminders: TReminder[];
  remindersOfDay: TReminder[];
  addReminder: (item: TReminder) => void;
  editReminder: (item: TReminder) => void;
  removeReminder: (item: TReminder) => void;
  removeReminders: (selectedReminders: TReminder[]) => void;
  loadRemindersOfDay: (day: TDateFormat) => void;
};
export type TDashBoardProps = {
  selectedDay: TDateFormat | undefined;
};
export type TReminderProps = {
  reminder: TReminder;
  onClick: () => void;
};
export type THourForecast = {
  time: string;
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
};
export type TForecast = {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  hour: THourForecast[];
};
export type TWeather = {
  region: string;
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  forecast?: {
    forecastday: TForecast[];
  };
};
export type TWeatherContext = {
  dayWeather: TWeather | undefined;
  currentLocation: string | undefined;
  loadDayWeather: (city: string, date: string) => void;
  addCurrentLocation: (Location: string) => void;
  loadingWeather: boolean;
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
