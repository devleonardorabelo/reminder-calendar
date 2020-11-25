import { TDateFormat } from '../types';

function generateCalendar(month: number, year: number): TDateFormat[] {
  const iMonthDate = new Date(year, month, 1);
  const fMonthDate = new Date(year, month + 1, 0);

  const getDayOfWeek = (day: number) => {
    const dayOfWeek = new Date(year, month, day);
    return dayOfWeek.getDay();
  };

  const days = [];

  for (let i = iMonthDate.getDate(); i < fMonthDate.getDate() + 1; i += 1) {
    days.push({
      day: i,
      month: iMonthDate.getMonth(),
      year: iMonthDate.getFullYear(),
      dayOfWeek: getDayOfWeek(i),
    });
  }

  return days;
}

export default generateCalendar;
