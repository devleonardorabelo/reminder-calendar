import React, { useState, createContext, useEffect, useMemo } from 'react';

import {
  TCalendarContext,
  TComponentProps,
  TDateFormat,
  TReminder,
} from '../types';
import generateCalendar from '../utils/generateCalendar';

const CalendarContext = createContext<TCalendarContext>({
  calendar: [],
  reminders: [],
  selectedDay: undefined,
  createCalendar: () => null,
  selectDay: () => null,
  navigateBetweenDates: () => null,
  addReminder: () => null,
  editReminder: () => null,
  removeReminder: () => null,
});

export const CalendarProvider: React.FC<TComponentProps> = ({
  children,
}: TComponentProps) => {
  const [reminders, setReminders] = useState<TReminder[]>([]);
  const [calendar, setCalendar] = useState<TDateFormat[]>([]);
  const [selectedDay, setSelectedDay] = useState<TDateFormat>();

  const date = useMemo(() => new Date(), []);

  const createCalendar = (month: number, year: number) =>
    setCalendar(generateCalendar(month, year));

  const navigateBetweenDates = (month: number) => {
    date.setMonth(date.getMonth() + month);
    setCalendar(generateCalendar(date.getMonth(), date.getFullYear()));
    setSelectedDay({
      day: 1,
      month: date.getMonth(),
      year: date.getFullYear(),
      dayOfWeek: date.getDay(),
    });
  };

  const addReminder = (item: TReminder) => setReminders([...reminders, item]);

  const editReminder = (item: TReminder) => {
    const index = reminders.findIndex((each) => each.id === item.id);
    reminders[index].title = item.title;
    reminders[index].color = item.color;
  };

  const removeReminder = (item: TReminder) => {
    const index = reminders.findIndex((each) => each.id === item.id);
    reminders.splice(index, 1);
    setReminders([...reminders]);
  };

  const selectDay = (day: TDateFormat) => setSelectedDay(day);

  const currentDay = date.getDate();
  const currentDayOfWeek = date.getDay();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();

  useEffect(() => {
    setSelectedDay({
      day: currentDay,
      month: currentMonth,
      year: currentYear,
      dayOfWeek: currentDayOfWeek,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    createCalendar(currentMonth, currentYear);
  }, [currentMonth, currentYear]);

  useEffect(() => {
    const data = localStorage.getItem('reminders');
    if (data) setReminders(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders));
  }, [reminders]);

  return (
    <CalendarContext.Provider
      value={{
        reminders,
        calendar,
        selectedDay,
        createCalendar,
        selectDay,
        navigateBetweenDates,
        addReminder,
        editReminder,
        removeReminder,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContext;
