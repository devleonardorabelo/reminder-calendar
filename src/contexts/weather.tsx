import React, { createContext, useEffect, useState } from 'react';
import getWeather from '../services/getWeather';
import { TComponentProps, TWeather, TWeatherContext } from '../types';

const WeatherContext = createContext<TWeatherContext>({
  dayWeather: undefined,
  loadDayWeather: () => null,
  currentLocation: '',
  addCurrentLocation: () => null,
  loadingWeather: true,
});

export const WeatherProvider: React.FC<TComponentProps> = ({
  children,
}: TComponentProps) => {
  const [dayWeather, setDayWeather] = useState<TWeather>();
  const [currentLocation, setCurrentLocation] = useState<string>();
  const [loadingWeather, setLoadingWeather] = useState<boolean>(true);

  const loadDayWeather = async (city: string, date: string) => {
    setLoadingWeather(true);
    const data = await getWeather(city, date);
    if (data) setDayWeather(data);
    else setDayWeather(undefined);
    setLoadingWeather(false);
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
        loadingWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
