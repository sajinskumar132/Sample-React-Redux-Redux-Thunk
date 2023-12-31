import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './counterStore'
import PostReducer from './postsStore'
import {thunk} from 'redux-thunk';

const middleware = (getDefaultMiddleware) => {
  return getDefaultMiddleware().concat(thunk);
};

export const Store=configureStore({
    reducer:{
        Counter:CounterReducer,
        Posts:PostReducer
    },
    middleware

})

