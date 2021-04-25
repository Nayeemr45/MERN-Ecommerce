import { combineReducers } from 'redux';

import auth from './auth';
import sellerauth from './sellerauth';
import products from './products';
import cart from './cart';
//import order from './order';
import {
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
    orderDeliverReducer,
    orderListMyReducer,
    orderListReducer,
  } from './order'
  
export const reducers = combineReducers({ auth , sellerauth , products , cart , orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderDeliver: orderDeliverReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,});