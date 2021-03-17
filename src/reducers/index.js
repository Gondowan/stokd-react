import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import productsReducer from './productsReducer';
import navigationReducer from './navigationReducer'

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  inventory: productsReducer,
  path: navigationReducer
})