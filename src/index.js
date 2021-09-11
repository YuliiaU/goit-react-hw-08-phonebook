import React from 'react';
import ReactDOM from 'react-dom';
import 'modern-normalize/modern-normalize.css';
import App from './App';
import './style.css';
import {} from './redux/contacts/contacts-types';
import { Provider } from 'react-redux';
import {store,persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
 <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);