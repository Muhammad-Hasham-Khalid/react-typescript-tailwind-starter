import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './application';
import './index.css';

document.title = import.meta.env.VITE_APP_TITLE;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
);
