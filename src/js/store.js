/* global process */

import { routerReducer } from 'react-router-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import authentication from 'modules/authentication';

const reducer = combineReducers({
  [authentication.constants.name]: authentication.reducer,
  routing: routerReducer,
});

const DevTools = (process.env.NODE_ENV !== 'production') ?
require('lib/components/devTools').default : f => f;

const enhancements = [applyMiddleware(thunk)];

if (process.env.NODE_ENV !== 'production') {
  enhancements.push(DevTools.instrument());
}

const enhancer = compose(
  ...enhancements,
);


const store = createStore(
  reducer,
  enhancer,
);

export default store;
