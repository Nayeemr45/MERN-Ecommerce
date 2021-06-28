import {
  FETCH_ALL_PRODUCT,PRODUCT_DETAILS_REQUEST,
  CREATE_PRODUCT,
  PRODUCT_LIST_REQUEST,

  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL
} from '../constants/actionTypes';

export default (products = [], action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }  
    case FETCH_ALL_PRODUCT:
      return action.payload;
    case PRODUCT_DETAILS_REQUEST:
      return action.payload;
    case CREATE_PRODUCT:
      return [...products, action.payload];
    case UPDATE_PRODUCT:
      return products.map((product) =>
        product._id === action.payload._id ? action.payload : product
      );
    case DELETE_PRODUCT:
      return products.filter((product) => product._id !== action.payload);
    default:
      return products;
  }
};
