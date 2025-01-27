import { createAction, props } from '@ngrx/store';
import { GetAddtocart } from '../../models/get-addtocart';

export const loadAddToCart = createAction('[Admin Dashboard] Load AddToCart');

export const loadAddToCartSuccess = createAction(
  '[Admin Dashboard] Load AddToCart Success',
  props<{ data: GetAddtocart[] }>()
);

export const loadAddToCartFailure = createAction(
  '[Admin Dashboard] Load AddToCart Failure',
  props<{ error: string }>()
);
// import { createAction, props } from '@ngrx/store';

// export const loadAddToCart = createAction('[Admin Dashboard] Load Add To Cart');
// export const loadAddToCartSuccess = createAction(
//   '[Admin Dashboard] Load Add To Cart Success',
//   props<{ data: any }>()
// );
// export const loadAddToCartFailure = createAction(
//   '[Admin Dashboard] Load Add To Cart Failure',
//   props<{ error: string }>()
// );
