import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import productsReducer from './productsReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: productsReducer
})