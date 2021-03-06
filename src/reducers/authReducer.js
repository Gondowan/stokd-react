import { IS_LOGGED_IN, REGISTER, SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  user: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case REGISTER:
      return { ...state, isSignedIn: true, user: action.payload }
    case SIGN_IN:
      return { ...state, isSignedIn: true, user: action.payload }
    case IS_LOGGED_IN:
      return { ...state, isSignedIn: true, user: action.payload }
    case SIGN_OUT:
      return { ...state, isSignedIn: false, user: null, path: 'dashboard' }
    default:
      return state;
  }
};