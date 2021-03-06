import React, { createContext, useEffect, useState } from 'react';
import {
  TComponentProps,
  TDateFormat,
  TReminder,
  TReminderContext,
} from '../types';
import sortByHour from '../utils/sortByHour';

const ReminderContext = createContext<TReminderContext>({
  reminders: [],
  remindersOfDay: [],
  addReminder: () => null,
  editReminder: () => null,
  removeReminder: () => null,
  removeReminders: () => null,
  loadRemindersOfDay: () => null,
});

export const ReminderProvider: React.FC<TComponentProps> = ({
  children,
}: TComponentProps) => {
  const [reminders, setReminders] = useState<TReminder[]>([]);
  const [remindersOfDay, setReminderOfDay] = useState<TReminder[]>([]);

  const addReminder = (item: TReminder) => setReminders([...reminders, item]);

  const editReminder = (item: TReminder) => {
    const index = reminders.findIndex((each) => each.id === item.id);
    reminders[index].title = item.title;
    reminders[index].hour = item.hour;
    reminders[index].color = item.color;
    reminders[index].city = item.city;
    setReminders([...reminders]);
  };

  const removeReminder = (item: TReminder) => {
    const index = reminders.findIndex((each) => each.id === item.id);
    reminders.splice(index, 1);
    setReminders([...reminders]);
  };

  const removeReminders = (selectedReminders: TReminder[]) => {
    selectedReminders.forEach((reminder) => {
      const index = reminders.findIndex((each) => each.id === reminder.id);
      reminders.splice(index, 1);
    });
    setReminders([...reminders]);
  };

  const loadRemindersOfDay = (day: TDateFormat) => {
    const remindersPerDay: TReminder[] = [];
    reminders.forEach((each) => {
      if (
        each.date.day === day.day &&
        each.date.month === day.month &&
        each.date.year === day.year
      ) {
        remindersPerDay.push(each);
      }
    });
    setReminderOfDay(sortByHour(remindersPerDay));
  };

  useEffect(() => {
    const data = localStorage.getItem('reminders');
    if (data) setReminders(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders));
  }, [reminders]);

  return (
    <ReminderContext.Provider
      value={{
        reminders,
        remindersOfDay,
        addReminder,
        editReminder,
        removeReminder,
        removeReminders,
        loadRemindersOfDay,
      }}
    >
      {children}
    </ReminderContext.Provider>
  );
};

export default ReminderContext;
