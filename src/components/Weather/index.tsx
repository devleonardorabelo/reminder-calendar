import React, { useEffect, useState } from 'react';
import { TWeatherProps } from '../../types';
import './styles.css';

const Weather = ({ weather, day, loading }: TWeatherProps): JSX.Element => {
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
  const currentWeather = weather?.current;

  if (loading)
    return (
      <div className="weatherRealTime row">
        <p>carregando</p>
      </div>
    );

  return currentDate && selectedDate ? (
    <div className="weatherRealTime row">
      {+currentDate === +selectedDate && currentWeather && (
        <>
          <div className="col-3">
            <img src={currentWeather.condition.icon} alt="" />
          </div>
          <div className="col-auto">
            <span className="temp">{currentWeather.temp_c}</span>
            <span className="maxMin">
              <p>{currentWeather.condition.text}</p>
            </span>
          </div>
        </>
      )}
      {+currentDate < +selectedDate && forecast && (
        <>
          <div className="col-3">
            <img src={forecast.day.condition.icon} alt="" />
          </div>
          <div className="col-auto">
            <span className="maxMin">
              <p>
                max:
                {forecast.day.maxtemp_c}
              </p>
            </span>
            <span className="maxMin">
              <p>
                min:
                {forecast.day.mintemp_c}
              </p>
            </span>
            <span className="maxMin">
              <p>{forecast.day.condition.text}</p>
            </span>
          </div>
        </>
      )}
      {+currentDate > +selectedDate && currentWeather && <p>passado</p>}
      {+currentDate < +selectedDate && !forecast && <p>futuro</p>}
      {!currentWeather && <p>Adicione uma cidade</p>}
    </div>
  ) : (
    <p>Indisponível</p>
  );
};

export default Weather;
