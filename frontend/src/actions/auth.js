import { AUTH , SELLERAUTH,
  LOGOUT } from '../constants/actionTypes';
import * as api from '../api/index.js';


export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    //router.push('/');
  } catch (error) {
    console.log(error);
  }
};
export const logout = () => (dispatch) => {
  localStorage.removeItem('profile')
  localStorage.removeItem('cartItems')
  localStorage.removeItem('shippingAddress')
  localStorage.removeItem('paymentMethod')
  dispatch({ type: LOGOUT })
  document.location.href = '/login'
}

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const sellerSignin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.sellerSignIn(formData);

    dispatch({ type: SELLERAUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};
export const sellerSignup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.sellerSignUp(formData);

    dispatch({ type: SELLERAUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};