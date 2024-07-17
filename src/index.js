import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App texto={{chamada1: 'Texto 1', chamada2: 'Texto 2'}} />
  </React.StrictMode>
);

