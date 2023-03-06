import React from 'react';
import ReactDOM from 'react-dom/client';
import data from './data.json'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>
);

