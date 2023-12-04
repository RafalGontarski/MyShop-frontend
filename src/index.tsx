import React from 'react';
import ReactDOM from 'react-dom/client';

import './i18n';
import './index.css';

import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {AppWithProviders} from "./AppWithProviders";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <AppWithProviders />
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
