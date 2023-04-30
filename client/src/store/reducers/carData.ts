import {
    SET_VEHICLE_NUM,
    SET_VEHICLE_TYPE,
    SET_VEHICLE_BODY_TYPE_MODEL,
    SET_VEHICLE_YEAR_MODEL,
    SET_VEHICLE_MAKE,
    SET_VEHICLE_MODEL,
    SET_VEHICLE_PLATE_NUMBER,
    SET_VEHICLE_PLATE_MODEL,
    SET_VEHICLE_CLASS,
    SET_VEHICLE_TRUST_NUMBER,
    SET_VEHICLE_FEES_PAID,
    SET_VEHICLE_ISSUE_DATE,
    SET_VEHICLE_EXPIRATION_DATE,
    SET_VEHICLE_REGISTERED_OWNERS,
    SET_VEHICLE_ADDRESS,
    SET_VEHICLE_CITY,
    SET_VEHICLE_STATE,
    SET_VEHICLE1_URL,
    SET_VEHICLE2_URL,
    SET_VEHICLE3_URL,
  } from '../types';
  
  const initialState = {
    vehicle_num: null,
    vehicle_type: null,
    vehicle_body_type_model: null,
    vehicle_year_model: null,
    vehicle_make: null,
    vehicle_model: null,
    vehicle_plate_number: null,
    vehicle_plate_model: null,
    vehicle_class: null,
    vehicle_trust_number: null,
    vehicle_fees_paid: null,
    vehicle_issue_date: null,
    vehicle_expiration_date: null,
    vehicle_registered_owners: null,
    vehicle_address: null,
    vehicle_city: null,
    vehicle_state: null,
  };
  
  function carMetadataReducer(state = initialState, action: any) {
    const { type, payload } = action;
  
    switch (type) {
      case SET_VEHICLE_NUM:
        return{
          ...state,
          vehicle_num : payload
        }
      case SET_VEHICLE_TYPE:
        return{
          ...state,
          vehicle_type : payload
        }
      case SET_VEHICLE_BODY_TYPE_MODEL:
        return{
          ...state,
          vehicle_body_type_model : payload
        }
      case SET_VEHICLE_YEAR_MODEL:
        return{
          ...state,
          vehicle_year_model : payload
        }
      case SET_VEHICLE_MAKE:
        return{
          ...state,
          vehicle_make : payload
        }
      case SET_VEHICLE_MODEL:
        return{
          ...state,
          vehicle_model : payload
        }
      case SET_VEHICLE_PLATE_NUMBER:
        return{
          ...state,
          vehicle_plate_number : payload
        }
      case SET_VEHICLE_PLATE_MODEL:
        return{
          ...state,
          vehicle_plate_model : payload
        }
      case SET_VEHICLE_CLASS:
        return{
          ...state,
          vehicle_class : payload
        }
      case SET_VEHICLE_TRUST_NUMBER:
        return{
          ...state,
          vehicle_trust_number : payload
        }
      case SET_VEHICLE_FEES_PAID:
        return{
          ...state,
          vehicle_fees_paid : payload
        }
      case SET_VEHICLE_ISSUE_DATE:
        return{
          ...state,
          vehicle_issue_date : payload
        }
      case SET_VEHICLE_EXPIRATION_DATE:
        return{
          ...state,
          vehicle_expiration_date : payload
        }
      case SET_VEHICLE_REGISTERED_OWNERS:
        return{
          ...state,
          vehicle_registered_owners : payload
        }
      case SET_VEHICLE_ADDRESS:
        return{
          ...state,
          vehicle_address : payload
        }
      case SET_VEHICLE_CITY:
        return{
          ...state,
          vehicle_city : payload
        }
      case SET_VEHICLE_STATE:
        return{
          ...state,
          vehicle_state : payload
        }
      case SET_VEHICLE1_URL:
        return{
          ...state,
          vehicle1_image : payload
        }
      case SET_VEHICLE2_URL:
        return{
          ...state,
          vehicle2_image : payload
        }
      case SET_VEHICLE3_URL:
        return{
          ...state,
          vehicle3_image : payload
        }
      default:
        return state;
    }
  }
  
  export default carMetadataReducer;
  