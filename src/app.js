import React from 'react';
import ReactDOM from 'react-dom/client';

import './app.scss'

import { Game } from './game/ui';

const game = {
  score: 0,
  state: "started",

  children: [
    {
      name: "snake",
      children: [
        { name : "head", dir: "up", coord: {top: 100, left: 200} },
        { name : "body", dir: "up", coord: {top: 164, left: 200} },
        { name : "tail", dir: "up", coord: {top: 228, left: 200} },
      ]
    },

    {
      name: "apple",
      coord: {top: 400, left: 200}
    },
  ]
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <Game data={game} />
    
  </React.StrictMode>
);


