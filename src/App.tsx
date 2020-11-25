import React from 'react';
import { CalendarProvider } from './contexts/calendar';
import { WeatherProvider } from './contexts/weather';
import { ReminderProvider } from './contexts/reminder';

import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <WeatherProvider>
      <CalendarProvider>
        <ReminderProvider>
          <Home />
        </ReminderProvider>
      </CalendarProvider>
    </WeatherProvider>
  );
};

export default App;
