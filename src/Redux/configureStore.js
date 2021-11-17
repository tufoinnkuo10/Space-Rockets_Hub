import { createStore, combineReducers, applyMiddleware } from 'redux';
import missions from './missions/missions';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import fetchrocketAPI from '../components/Apirocket';
import rocketReducer, { getRockets } from './rockets/rockets';

const reducer = combineReducers({missions,
  rockets: rocketReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

store.dispatch(getRockets());

fetchrocketAPI();

export default store;
