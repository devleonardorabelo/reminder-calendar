import React, { createContext, useEffect, useState } from 'react';
import {
  TComponentProps,
  TDateFormat,
  TReminder,
  TReminderContext,
} from '../types';

const ReminderContext = createContext<TReminderContext>({
  reminders: [],
  remindersOfDay: [],
  addReminder: () => null,
  editReminder: () => null,
  removeReminder: () => null,
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
    setReminders([...reminders]);
  };

  const removeReminder = (item: TReminder) => {
    const index = reminders.findIndex((each) => each.id === item.id);
    reminders.splice(index, 1);
    setReminders([...reminders]);
  };

  const loadRemindersOfDay = (day: TDateFormat) => {
    const remindersPerDay: TReminder[] = [];
    reminders.map((reminder) => {
      if (
        reminder.date.day === day.day &&
        reminder.date.month === day.month &&
        reminder.date.year === day.year
      ) {
        remindersPerDay.push(reminder);
      }
      return null;
    });
    setReminderOfDay(remindersPerDay);
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
        loadRemindersOfDay,
      }}
    >
      {children}
    </ReminderContext.Provider>
  );
};

export default ReminderContext;
