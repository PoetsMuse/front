import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import { SnakeHead, SnakeTail } from './snake/ui';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <SnakeHead top={100} left={100} name="head" />
    <SnakeTail top={200} left={200} name="tail" />
  </React.StrictMode>
);

reportWebVitals();
