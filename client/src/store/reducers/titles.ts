import {
    SET_TITLES
  } from '../types';
  
  const initialState = {
    titles: null,
  };
  
  function darkModeReducer(state = initialState, action: any) {
    const { type, payload } = action;
  
    switch (type) {
      case SET_TITLES:
        return{
          ...state,
          titles : payload
        }
      default:
        return state;
    }
  }
  
  export default darkModeReducer;
  