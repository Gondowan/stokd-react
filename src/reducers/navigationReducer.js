import { SIDE_MENU_PATH } from '../actions/types';

const INITIAL_STATE = {
  path: 'dashboard'
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  console.log(action.payload)
  switch(action.type){
    case SIDE_MENU_PATH:
      return { ...state, path: action.payload }
    default:
      return state;
  }
};