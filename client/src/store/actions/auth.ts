import api from '../../utils/api'
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../types';
// Load User
export const loadUser = () => async (dispatch: any) => {
  try {
    const res = await api.get('/v2/auth');
    
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const register = (formData: any) => async (dispatch: any) => {
  try {
    const res = await api.post('/v2/users/', formData);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      dispatch(setAlert("Registered Successfully"));
      return true;
  } catch (err:any) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error: any) => dispatch(setAlert(error.msg,'warning')));
    }
    dispatch({
      type: REGISTER_FAIL
    });
    return false;
  }
};

// Login User
export const login = (data: any) => async (dispatch: any) => {
  try {
    const res = await api.post('/v2/auth', data);
    const {success, username} =  res.data;
    if(success){
      dispatch(setAlert("Logged In"));      
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      dispatch(loadUser());
      return true
    }
  } catch (err: any) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error: any) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL
    });
    return false;
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });
