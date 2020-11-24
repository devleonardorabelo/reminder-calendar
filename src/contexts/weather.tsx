import React, { createContext, useEffect, useState } from 'react';
import getWeather from '../services/getWeather';
import { TComponentProps, TWeather, TWeatherContext } from '../types';

const WeatherContext = createContext<TWeatherContext>({
  dayWeather: undefined,
  loadDayWeather: () => null,
  currentLocation: '',
  addCurrentLocation: () => null,
});

export const WeatherProvider: React.FC<TComponentProps> = ({
  children,
}: TComponentProps) => {
  const [dayWeather, setDayWeather] = useState<TWeather>();
  const [currentLocation, setCurrentLocation] = useState<string>();

  const loadDayWeather = async (city: string, date: string) => {
    const data = await getWeather(city, date);
    setDayWeather(data);
  };

  const loadCurrentLocation = () => {
    const location = localStorage.getItem('reminderCalendarLocation');
    if (location) setCurrentLocation(location);
  };

  const addCurrentLocation = (location: string) => {
    localStorage.setItem('reminderCalendarLocation', location);
    setCurrentLocation(location);
  };

  useEffect(() => {
    loadCurrentLocation();
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        dayWeather,
        loadDayWeather,
        currentLocation,
        addCurrentLocation,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
