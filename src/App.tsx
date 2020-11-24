import React from 'react';
import { CalendarProvider } from './contexts/calendar';

import Home from './pages/Home';

const App = (): JSX.Element => {
  return (
    <CalendarProvider>
      <Home />
    </CalendarProvider>
  );
};

export default App;
