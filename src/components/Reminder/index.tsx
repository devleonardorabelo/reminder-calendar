import React from 'react';
import { TReminderProps } from '../../types';
import './styles.css';

const Reminder = ({ reminder, onClick }: TReminderProps): JSX.Element => {
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
        <div className="tempPreview">
          <span className="actualTemp">28º</span>
          <span className="image">
            <img
              src="//cdn.weatherapi.com/weather/64x64/night/113.png"
              alt=""
            />
          </span>
          <span className="maxMinTemp">min 16º / max 28º</span>
        </div>
      </div>
    </button>
  );
};

export default Reminder;
