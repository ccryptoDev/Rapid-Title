import { combineReducers } from 'redux';
import profile from './profile'
import auth from './auth';
import darkMode from './darkMode';
import wallet from './wallet';
import titles from './titles';

export default combineReducers({
  auth,
  profile,
  darkMode,
  wallet,
  titles
});
