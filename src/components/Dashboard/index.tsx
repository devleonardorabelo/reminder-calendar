import React from 'react';
import { TReminderProps } from '../../types';
import getMonthName from '../../utils/setNameMonth';
import './styles.css';

const Dashboard = ({ selectedDay }: TReminderProps): JSX.Element => {
  return (
    <div className="dashboard">
      <h1>
        {selectedDay &&
          `${selectedDay.day} de ${getMonthName(selectedDay.month)} de ${
            selectedDay.year
          }`}
      </h1>
      <div className="calendar">
        <div className="col-12">
          <button type="button" className="red">
            <span className="time">07:00</span>
            Consulta Médica Ortopedista
            <div className="tempPreview">
              <span className="actualTemp">28º</span>
              <span className="image">
                <img
                  src="//cdn.weatherapi.com/weather/64x64/night/113.png"
                  alt=""
                />
              </span>
            </div>
          </button>

          <button type="button" className="blue">
            <span className="time">08:00</span>
            <span className="description">Jantar em Família</span>
            <div className="tempPreview">
              <span className="image">
                <img
                  src="//cdn.weatherapi.com/weather/64x64/night/113.png"
                  alt=""
                />
              </span>
              <span className="actualTemp">28º</span>
              <span className="maxMinTemp">min 16º / max 28º</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
