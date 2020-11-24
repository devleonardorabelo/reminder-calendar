export type TDateFormat = {
  day: number;
  month: number;
  year: number;
  dayOfWeek: number;
};
export type TReminder = {
  id: string;
  title: string;
  color: string;
  locality: string;
  date: TDateFormat;
};
export type TComponentProps = {
  children: React.ReactNode;
};
export type TCalendarContext = {
  calendar: TDateFormat[];
  reminders: TReminder[];
  selectedDay: TDateFormat | undefined;
  selectDay: (day: TDateFormat) => void;
  navigateBetweenDates: (month: number, year: number) => void;
  addReminder: (item: TReminder) => void;
  editReminder: (item: TReminder) => void;
  removeReminder: (item: TReminder) => void;
};
export type TCalendarProps = {
  days: TDateFormat[];
  selectedDay: TDateFormat | undefined;
  selectDay: (day: TDateFormat) => any;
};
export type TWeather = {
  region: string;
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
  };
};
export type TWeatherContext = {
  dayWeather: TWeather | undefined;
  currentLocation: string | undefined;
  loadDayWeather: (city: string, date: string) => void;
  addCurrentLocation: (Location: string) => void;
};
