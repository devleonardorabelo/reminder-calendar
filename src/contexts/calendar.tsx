import React, { useState, createContext, useEffect } from 'react';

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

  const navigateBetweenDates = (month: number, year: number) =>
    setCalendar(generateCalendar(month, year));

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

  const date = new Date();
  const currentDay = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const currentDayOfWeek = date.getDay();

  useEffect(() => {
    setSelectedDay({
      day: currentDay,
      month: currentMonth,
      year: currentYear,
      dayOfWeek: currentDayOfWeek,
    });
  }, [currentDay, currentDayOfWeek, currentMonth, currentYear]);

  useEffect(() => {
    setCalendar(generateCalendar(currentMonth, currentYear));
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
