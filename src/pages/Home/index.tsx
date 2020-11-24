import React, { useContext } from 'react';
import CalendarContext from '../../contexts/calendar';

import { Calendar, Weather } from '../../components';

const App = (): JSX.Element => {
  const { calendar } = useContext(CalendarContext);

  return (
    <div className="container row">
      <div className="col-3 leftNav">
        <div className="col-12">
          <input type="text" value="Brasília" />
        </div>
        <div className="col-12">
          <Weather />
          <Calendar days={calendar} />
        </div>
      </div>
      <div className="col" />
    </div>
  );
};

export default App;
