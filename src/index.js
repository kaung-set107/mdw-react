import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import $ from 'jquery';
import Popper from 'popper.js'
import App from './App';
import { Provider } from 'react-redux';
import {store,persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { AuthProvider } from './redux/AuthProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AuthProvider>
      <App />
      </AuthProvider>
    </PersistGate>
    </Provider>
    
  </React.StrictMode>
);

