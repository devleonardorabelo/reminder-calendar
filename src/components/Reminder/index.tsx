import React, { useEffect, useState } from 'react';
import getWeather from '../../services/getWeather';
import { THourForecast, TReminderProps } from '../../types';
import './styles.css';

const Reminder = ({
  reminder,
  reminders,
  onClick,
}: TReminderProps): JSX.Element => {
  const [hourForecast, setHourForecast] = useState<THourForecast>();

  const date = `${reminder.date.year}-${reminder.date.month + 1}-${
    reminder.date.day
  }`;
  const initialHour = reminder?.hour?.split(':');

  const loadReminderWeather = async () => {
    const data = await getWeather(reminder.city, date);
    if (data) {
      const dateReminder = `${date} ${initialHour[0]}:00`;
      if (data.forecast?.forecastday[0]) {
        data.forecast?.forecastday[0].hour?.forEach((each) => {
          if (each.time === dateReminder) {
            setHourForecast(each);
          }
        });
      }
    }
  };

  useEffect(() => {
    loadReminderWeather();
  }, [reminder, reminders]);

  return (
    <button
      key={reminder.id}
      type="button"
      className={`${reminder.color} reminder`}
      onClick={onClick}
    >
      <div className="reminderBody">
        <div>
          <span className="time">{`${reminder.hour} - ${reminder.city}`}</span>
          <div>
            <span className="title">{reminder.title}</span>
          </div>
        </div>
        {hourForecast && (
          <div className="tempPreview">
            <div className="forecastInfo">
              <p className="actualTemp">{`${hourForecast.temp_c}°`}</p>
              <p className="maxMinTemp">{hourForecast.condition.text}</p>
            </div>
            <div className="image">
              <img className="image" src={hourForecast.condition.icon} alt="" />
            </div>
          </div>
        )}
      </div>
    </button>
  );
};

export default Reminder;
