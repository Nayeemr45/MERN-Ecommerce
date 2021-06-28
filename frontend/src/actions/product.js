import { FETCH_ALL_PRODUCT,PRODUCT_LIST_REQUEST,PRODUCT_DETAILS_REQUEST, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();
    dispatch({ type: PRODUCT_LIST_REQUEST })

    dispatch({ type: FETCH_ALL_PRODUCT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getProductsDetails = (id) => async (dispatch) => {
  try {
    const { data } = await api.getProductsDetails(id);

    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    const { data } = await api.createProduct(product);

    dispatch({ type: CREATE_PRODUCT, payload: data });

  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = (id, product) => async (dispatch) => {
  try {
    const { data } = await api.updateProduct(id, product);

    dispatch({ type: UPDATE_PRODUCT, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const deleteProduct = (id) => async (dispatch) => {
  try {
    await await api.deleteProduct(id);

    dispatch({ type: DELETE_PRODUCT, payload: id });
  } catch (error) {
    console.log(error);
  }
};