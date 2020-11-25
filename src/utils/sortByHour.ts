import { TReminder } from '../types';

function sortByHour(reminders: TReminder[]) {
  reminders.sort((a, b) => {
    const d = new Date();
    const hour1 = a.hour.split(':');
    const hour2 = b.hour.split(':');

    const date1 = new Date(
      d.getFullYear(),
      d.getMonth(),
      d.getDate(),
      Number(hour1[0]),
      Number(hour1[1]),
    );
    const date2 = new Date(
      d.getFullYear(),
      d.getMonth(),
      d.getDate(),
      Number(hour2[0]),
      Number(hour2[1]),
    );

    if (date1 > date2) return 1;
    if (date1 < date2) return -1;
    return 0;
  });

  return reminders;
}

export default sortByHour;
