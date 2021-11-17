import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missions from './missions/missions';
import dragons from './dragons/dragons';
import fetchrocketAPI from '../components/Apirocket';
import rocketReducer, { getRockets } from './rockets/rockets';

const reducer = combineReducers({ missions, dragons, rockets: rocketReducer });

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

store.dispatch(getRockets());

fetchrocketAPI();
export default store;
