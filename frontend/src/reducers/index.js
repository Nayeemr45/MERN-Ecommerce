import { combineReducers } from 'redux';

import auth from './auth';
import sellerauth from './sellerauth';
import products from './products';

export const reducers = combineReducers({ auth , sellerauth , products });