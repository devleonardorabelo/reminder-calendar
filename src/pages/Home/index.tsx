/* eslint-disable react-hooks/exhaustive-deps */
import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import CalendarContext from '../../contexts/calendar';
import WeatherContext from '../../contexts/weather';

import { Calendar, CircularButton, Weather } from '../../components';

const App: React.FC = () => {
  const [location, setLocation] = useState<string>('');

  const { calendar, selectedDay, selectDay, navigateBetweenDates } = useContext(
    CalendarContext,
  );
  const {
    addCurrentLocation,
    dayWeather,
    currentLocation,
    loadDayWeather,
    loadingWeather,
  } = useContext(WeatherContext);

  const changeLocation = (e: FormEvent) => {
    e.preventDefault();
    addCurrentLocation(location);
  };

  useEffect(() => {
    if (currentLocation && selectedDay) {
      const date = `${selectedDay?.year}-${selectedDay?.month + 1}-${
        selectedDay?.day
      }`;
      loadDayWeather(currentLocation, date);
    }
  }, [currentLocation, selectedDay]);

  return (
    <div className="container row">
      <div className="col-3 leftNav">
        <div className="col-12">
          <form onSubmit={changeLocation}>
            <input
              className="cityInput"
              type="text"
              defaultValue={currentLocation}
              onChange={(e) => setLocation(e.target.value)}
            />
          </form>
        </div>
        <div className="col-12">
          <Weather
            weather={dayWeather}
            day={selectedDay}
            loading={loadingWeather}
          />
          <Calendar
            days={calendar}
            selectedDay={selectedDay}
            selectDay={selectDay}
          />
          <div className="space-between-buttons">
            <CircularButton onClick={() => navigateBetweenDates(-1)}>
              <FiChevronLeft size={16} color="#FFFFFF" />
            </CircularButton>
            <CircularButton onClick={() => navigateBetweenDates(1)}>
              <FiChevronRight size={16} color="#FFFFFF" />
            </CircularButton>
          </div>
        </div>
      </div>
      <div className="col" />
    </div>
  );
};

export default App;
