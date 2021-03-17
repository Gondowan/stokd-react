import _ from 'lodash';
import {
  CREATE_PRODUCT,
  FETCH_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  FETCH_INVENTORY
} from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default ( state = {}, action ) =>{
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
      return {...state, ..._.mapKeys(action.payload, 'id')}
    default:
      return state
  }
}