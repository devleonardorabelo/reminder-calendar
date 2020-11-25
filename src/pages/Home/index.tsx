/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import CalendarContext from '../../contexts/calendar';
import WeatherContext from '../../contexts/weather';

import { Calendar, Weather } from '../../components';

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
          <input
            type="text"
            defaultValue={currentLocation}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button type="button" onClick={() => addCurrentLocation(location)}>
            ok
          </button>
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
          <button
            type="button"
            onClick={() => {
              navigateBetweenDates(-1);
            }}
          >
            -
          </button>
          <button
            type="button"
            onClick={() => {
              navigateBetweenDates(1);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col" />
    </div>
  );
};

export default App;
