import React from 'react';
import { TCalendarProps } from '../../types';
import getMonthName from '../../utils/setNameMonth';
import './styles.css';

const Calendar = ({
  days,
  selectedDay,
  selectDay,
}: TCalendarProps): JSX.Element => {
  const skipDays = [];
  for (let i = 0; i < days[0]?.dayOfWeek; i += 1) {
    skipDays.push(<span key={Math.random()} />);
  }

  return (
    <div className="col-12">
      <h3>
        {selectedDay &&
          `${selectedDay.day} de ${getMonthName(selectedDay.month)} de ${
            selectedDay.year
          }`}
      </h3>
      <div className="calendarDays">
        <div>Dom</div>
        <div>Seg</div>
        <div>Ter</div>
        <div>Qua</div>
        <div>Qui</div>
        <div>Sex</div>
        <div>Sáb</div>
        {skipDays.map((item) => item)}
        {days.map((item) => (
          <button
            onClick={() => selectDay(item)}
            type="button"
            key={Math.random()}
            className={`${item.day === selectedDay?.day && 'active'}`}
          >
            {item.day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
