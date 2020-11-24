import React from 'react';
import './styles.css';

const Weather = (): JSX.Element => (
  <div className="weatherRealTime row">
    <div className="col-3">
      <span className="sun" />
    </div>
    <div className="col-auto">
      <span className="temp">28°</span>
      <span className="maxMin">
        <span className="max">28°</span>
        <span className="min">18°</span>
      </span>
    </div>
  </div>
);

export default Weather;
