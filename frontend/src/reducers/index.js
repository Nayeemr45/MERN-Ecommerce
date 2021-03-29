import { combineReducers } from 'redux';

import auth from './auth';
import sellerauth from './sellerauth';

export const reducers = combineReducers({ auth , sellerauth });