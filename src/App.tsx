import React, { useEffect } from 'react';
import generateCalendar from './utils/generateCalendar';

const App = (): JSX.Element => {
  useEffect(() => {
    console.log(generateCalendar(10, 2020));
  }, []);
  return <div>Hello World</div>;
};

export default App;
