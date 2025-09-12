import { BrowserRouter } from 'react-router-dom';
import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
