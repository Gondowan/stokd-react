import _ from 'lodash';
import {
  CREATE_PRODUCT,
  FETCH_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  FETCH_INVENTORY,
  SIGN_OUT,
} from '../actions/types';

const INITIAL_STATE =  {inventory: [], dataLoaded: false}

// eslint-disable-next-line import/no-anonymous-default-export
export default ( state = INITIAL_STATE, action ) =>{
  switch (action.type){
    case FETCH_PRODUCT:
      return { ...state, [action.payload.id]: action.payload }
    case CREATE_PRODUCT:
      return { ...state, [action.payload.id]: action.payload }
    case EDIT_PRODUCT:
      return { ...state, [action.payload.id]: action.payload }
    case DELETE_PRODUCT:
      return _.omit(state, action.payload);
    case FETCH_INVENTORY:
      return {...state, inventory: action.payload, dataLoaded: true}
    case SIGN_OUT:
      return {...state, inventory: state, dataLoaded: false}
    default:
      return state
  }
}