import React from 'react';
import {ReactDOM, render} from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import * as serviceWorker from './serviceWorker';


const counter = (state = 0, action) => {
    switch(action.type) {
    case 'INCREMENT':
       return state = state + 1;
    case 'DECREMENT':
       return state = state - 1;
    default:
       return state;
     }
    };
const store = createStore(counter);
    
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
