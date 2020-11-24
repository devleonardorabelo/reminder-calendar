import React, { useEffect, useState } from 'react';
import { TWeatherProps } from '../../types';
import './styles.css';

const Weather = ({ weather, day }: TWeatherProps): JSX.Element => {
  const [currentDate, setCurrentDate] = useState<Date>();
  const [selectedDate, setSelectedDate] = useState<Date>();

  useEffect(() => {
    const date = new Date();
    const current = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    );
    setCurrentDate(current);
    const selected = new Date(
      Number(day?.year),
      Number(day?.month),
      Number(day?.day),
    );
    setSelectedDate(selected);
  }, [day]);

  const forecast = weather?.forecast?.forecastday[0];

  return currentDate && selectedDate ? (
    <div className="weatherRealTime row">
      {+currentDate === +selectedDate && (
        <>
          <div className="col-3">
            <img src={weather?.current.condition.icon} alt="" />
          </div>
          <div className="col-auto">
            <span className="temp">{weather?.current.temp_c}</span>
            <span className="maxMin">
              <p>{weather?.current.condition.text}</p>
            </span>
          </div>
        </>
      )}
      {currentDate < selectedDate && forecast && (
        <>
          <div className="col-3">
            <img
              src={weather?.forecast?.forecastday[0].day.condition.icon}
              alt=""
            />
          </div>
          <div className="col-auto">
            <span className="maxMin">
              <p>
                max:
                {weather?.forecast?.forecastday[0].day.maxtemp_c}
              </p>
            </span>
            <span className="maxMin">
              <p>
                min:
                {weather?.forecast?.forecastday[0].day.mintemp_c}
              </p>
            </span>
            <span className="maxMin">
              <p>{weather?.forecast?.forecastday[0].day.condition.text}</p>
            </span>
          </div>
        </>
      )}
      {currentDate > selectedDate && <p>passado</p>}
    </div>
  ) : (
    <p>Indisponível</p>
  );
};

export default Weather;
