import React from 'react';
import { CalendarProvider } from './contexts/calendar';
import { WeatherProvider } from './contexts/weather';

import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <WeatherProvider>
      <CalendarProvider>
        <Home />
      </CalendarProvider>
    </WeatherProvider>
  );
};

export default App;
