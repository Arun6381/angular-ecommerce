import { createReducer, on } from '@ngrx/store';
import {loadAddToCart,loadAddToCartSuccess,loadAddToCartFailure} from './admin-dash.action';
import { AdminDashState, initialState } from './admin-dash.state';

export const addToCartReducer = createReducer(
  initialState,
  on(loadAddToCart, (state) => {
    console.log('Reducer Triggered: loadAddToCart', state);
    return { ...state, loading: true };
  }),
  on(loadAddToCartSuccess, (state, { data }) => {
    console.log('Reducer Triggered: loadAddToCartSuccess', data);
    return {
      ...state,
      loading: false,
      data,
      error: null,
    };
  }),
  on(loadAddToCartFailure, (state, { error }) => {
    console.error('Reducer Triggered: loadAddToCartFailure', error);
    return {
      ...state,
      loading: false,
      error,
    };
  })
);



// export const addToCartReducer = createReducer(
//   initialState,
//   on(AddToCartActions.loadAddToCart, (state) => ({ ...state, loading: true })),
//   on(AddToCartActions.loadAddToCartSuccess, (state, { data }) => ({
//     ...state,
//     loading: false,
//     data,     
//     error: null,
//   })),
  
//   on(AddToCartActions.loadAddToCartFailure, (state, { error }) => ({
//     ...state,
//     loading: false,
//     error,
//   }))
// );
