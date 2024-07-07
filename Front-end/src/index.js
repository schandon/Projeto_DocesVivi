import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CestaProvider } from './context/CestaContexto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CestaProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CestaProvider>
);

reportWebVitals();
