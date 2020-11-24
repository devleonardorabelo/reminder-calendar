import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles.css';

import { loadEnv } from './config/env';

loadEnv();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
