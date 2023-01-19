import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// render specified component in div element of index.html w/ id='root'
root.render(
  <App />
);