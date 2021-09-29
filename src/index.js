import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'))

reportWebVitals();
