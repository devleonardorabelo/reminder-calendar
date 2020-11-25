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

  localStorage.clear();

  const forecast = weather?.forecast?.forecastday[0];
  const currentWeather = weather?.current;

  if (loading)
    return (
      <div className="weather">
        <div className="available align-center">
          <img src="./loading.svg" alt="" />
        </div>
      </div>
    );

  return currentDate && selectedDate ? (
    <div className="weather">
      {+currentDate === +selectedDate && currentWeather && (
        <div className="available">
          <img src={currentWeather.condition.icon} alt="" />
          <div className="temp">{`${currentWeather.temp_c}°C`}</div>
          <span className="text">{currentWeather.condition.text}</span>
        </div>
      )}
      {+currentDate < +selectedDate && forecast && (
        <div className="available">
          <img src={forecast.day.condition.icon} alt="" />
          <div className="maxMin">
            {`${forecast.day.maxtemp_c} / ${forecast.day.mintemp_c}°C`}
          </div>
          <span className="text">{forecast.day.condition.text}</span>
        </div>
      )}
      {+currentDate > +selectedDate && currentWeather && (
        <div className="unavailable align-center">
          <span className="maxMin">Esse dia já passou</span>
        </div>
      )}
      {+currentDate < +selectedDate && !forecast && (
        <div className="unavailable align-center">
          <span className="maxMin">Previsão Indisponível</span>
        </div>
      )}
      {!currentWeather && (
        <div className="available align-center">
          <span className="maxMin">Cidade não encontrada</span>
        </div>
      )}
    </div>
  ) : (
    <p>Indisponível</p>
  );
};

export default Weather;
