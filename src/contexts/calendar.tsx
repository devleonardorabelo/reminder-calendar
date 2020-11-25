import React, { useState, createContext, useEffect, useMemo } from 'react';

import { TCalendarContext, TComponentProps, TDateFormat } from '../types';
import generateCalendar from '../utils/generateCalendar';

const CalendarContext = createContext<TCalendarContext>({
  calendar: [],
  selectedDay: undefined,
  createCalendar: () => null,
  selectDay: () => null,
  navigateBetweenDates: () => null,
});

export const CalendarProvider: React.FC<TComponentProps> = ({
  children,
}: TComponentProps) => {
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
  }, []);

  useEffect(() => {
    createCalendar(currentMonth, currentYear);
  }, [currentMonth, currentYear]);

  return (
    <CalendarContext.Provider
      value={{
        calendar,
        selectedDay,
        createCalendar,
        selectDay,
        navigateBetweenDates,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContext;
