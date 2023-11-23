import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import './game.scss'

import { Snake } from './snake/ui';

const snake = {
  dummy: "smth",
  children: [
    { name : "head", dir: "up", coord: {top: 100, left: 200} },
    { name : "tail", dir: "up", coord: {top: 164, left: 200} },
  ]
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Snake data={snake} />
  </React.StrictMode>
);

reportWebVitals();
