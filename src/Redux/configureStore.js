import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missions from './missions/missions';
import dragons from './dragons/dragons';

const reducer = combineReducers({ missions, dragons });
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
