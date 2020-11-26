import { TDateFormat, TReminder, TWeather } from '../Entities';

export type TCalendarContext = {
  calendar: TDateFormat[];
  selectedDay: TDateFormat | undefined;
  createCalendar: (month: number, year: number) => void;
  selectDay: (day: TDateFormat) => void;
  navigateBetweenDates: (month: number) => void;
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
export type TWeatherContext = {
  dayWeather: TWeather | undefined;
  currentLocation: string | undefined;
  loadDayWeather: (city: string, date: string) => void;
  addCurrentLocation: (Location: string) => void;
  loadingWeather: boolean;
};
