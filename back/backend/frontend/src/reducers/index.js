import { combineReducers } from 'redux';
import cars from './cars';
import auth from './auth';

 export default combineReducers({
  cars,
  auth,
});