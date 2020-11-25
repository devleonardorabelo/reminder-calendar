import React, { createContext, useEffect, useState } from 'react';
import { TComponentProps, TReminder, TReminderContext } from '../types';

const ReminderContext = createContext<TReminderContext>({
  reminders: [],
  addReminder: () => null,
  editReminder: () => null,
  removeReminder: () => null,
});

export const ReminderProvider: React.FC<TComponentProps> = ({
  children,
}: TComponentProps) => {
  const [reminders, setReminders] = useState<TReminder[]>([]);

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
        addReminder,
        editReminder,
        removeReminder,
      }}
    >
      {children}
    </ReminderContext.Provider>
  );
};

export default ReminderContext;
