import React from 'react';
import { TDateFormat } from '../../types';
import './styles.css';

const Calendar = ({ days }: { days: TDateFormat[] }): JSX.Element => {
  const skipDays = [];
  for (let i = 0; i < days[0]?.dayOfWeek; i += 1) {
    skipDays.push(<span />);
  }

  return (
    <div className="col-12 calendar">
      <h2>Setembro, 2020</h2>
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
          <a href="void">{item.day}</a>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
