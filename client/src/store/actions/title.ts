import api from '../../utils/api'
import { setAlert } from './alert';
import { SET_TITLES } from 'store/types';
import store from '../store';

// Load Titles
export const loadTitles = async () => {
  try {
    const res = await api.get('/v2/titles');
    store.dispatch({
      type: SET_TITLES,
      payload: res.data
    });
    return res.data;
  } catch (err: any) {
    setAlert(err);
  }
};
