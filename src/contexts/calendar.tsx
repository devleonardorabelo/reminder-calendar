import React, { useState, createContext, useEffect } from 'react';

import {
  TCalendarContext,
  TComponentProps,
  TDateFormat,
  TReminder,
} from '../types';
import generateCalendar from '../utils/generateCalendar';

const date = new Date();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

const CalendarContext = createContext<TCalendarContext>({
  calendar: [],
  reminders: [],
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

  useEffect(() => {
    setCalendar(generateCalendar(currentMonth, currentYear));
  }, []);

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
