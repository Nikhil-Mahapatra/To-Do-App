import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
//create redux store for state
import { configureStore } from "@reduxjs/toolkit";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as reduxFormReducer } from 'redux-form';
import account from './Reducers/Account';
import todos from './Reducers/TodoReducer';
import visibilityFilter from './Reducers/FilterReducer'

const reducer = combineReducers({
  todos,
  visibilityFilter,
  account,
  form: reduxFormReducer,
});

const store = configureStore({ reducer });
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
