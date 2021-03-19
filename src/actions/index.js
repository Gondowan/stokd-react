import products from '../apis/products';
import createBrowserHistory from '../history';
import { 
  REGISTER,
  SIGN_IN, 
  SIGN_OUT, 
  FETCH_INVENTORY,
  SIDE_MENU_PATH,
  // CREATE_PRODUCT,
  // FETCH_PRODUCT,
  // DELETE_PRODUCT,
  // EDIT_PRODUCT
} from './types'

export const register =  ({email, password, passwordConfirmation}) => async (dispatch) =>{
  const response = await products.post('https://stokd-backend.herokuapp.com/api/v1/sign_up', {user: {email: email, password: password, passwordConfirmation: passwordConfirmation}})
  dispatch({ type: REGISTER, payload: response.data })
  createBrowserHistory.push('/')
};

export const signIn =  ({email, password}) => async (dispatch) =>{
  const response = await products.post('https://stokd-backend.herokuapp.com/api/v1/sign_in', {user: {email: email, password: password}})
  dispatch({ type: SIGN_IN, payload: response.data })
  createBrowserHistory.push('/dashboard')
};

export const signOut = () =>{
  createBrowserHistory.push('/')
  return{
    type: SIGN_OUT
  };
};

export const sideMenuPath = (path) =>dispatch =>{
  
  dispatch({type: SIDE_MENU_PATH, payload: path})
}

// export const createStream = (formValues) => async (dispatch, getState) =>{
//   const { userId } = getState().auth;
//   const response  = await products.post('/', { ...formValues, userId });
//   createBrowserHistory.push('/')
//   dispatch({ type: CREATE_PRODUCT, payload: response.data })
// }

export const fetchInventory = (companyId) => async (dispatch) =>{
  const response = await products.get(`https://stokd-backend.herokuapp.com/api/v1/companies/${companyId}/products`)

  dispatch({ type: FETCH_INVENTORY, payload: response.data })
}

// export const fetchStream = (id) => async (dispatch) =>{
//   const response  = await streams.get(`/streams/${id}`)

//   dispatch({ type: FETCH_STREAM, payload: response.data })
// }

// export const editStream = (id, formValues) => async (dispatch) =>{
//   const response  = await streams.patch(`/streams/${id}`, formValues)

//   dispatch({ type: EDIT_STREAM, payload: response.data })
//   createBrowserHistory.push('/')
// }

// export const deleteStream = (id) => async (dispatch) =>{
//   await streams.delete(`/streams/${id}`)

//   dispatch({ type: DELETE_STREAM, payload: id })
//   createBrowserHistory.push('/')
// }