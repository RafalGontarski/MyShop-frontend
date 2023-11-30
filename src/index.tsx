import React from 'react';
import ReactDOM from 'react-dom/client';

import './i18n';
import './index.css';
import App from './App';

import { UserProvider } from "./models/providers/UserProvider";
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {StorageProvider} from "./models/providers/StorageProvider";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <UserProvider>
            <StorageProvider>
              <App />
            </StorageProvider>
          </UserProvider>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
