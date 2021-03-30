import {
  FETCH_ALL_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from '../constants/actionTypes';

export default (products = [], action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCT:
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
