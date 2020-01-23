import React from 'react';
import {ReactDOM, render} from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import App from './App';
import * as serviceWorker from './serviceWorker';
import allReducers from "./reducers/allReducers";
import { createLogger } from 'redux-logger';
import routes from  './config/route';

const logger = createLogger();
const store = createStore(allReducers, applyMiddleware(logger));
    
render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();