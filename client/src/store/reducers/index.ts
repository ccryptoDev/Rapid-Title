import { combineReducers } from 'redux';
import profile from './profile'
import auth from './auth';
import darkMode from './darkMode';

export default combineReducers({
  auth,
  profile,
  darkMode
});
