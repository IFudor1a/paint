import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.scss';
import App from './components/App';
import {Provider} from "react-redux";
import {setupStore} from "./redux";

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


