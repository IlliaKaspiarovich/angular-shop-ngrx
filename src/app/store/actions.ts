import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product';

// Products
export const loadProducts = createAction('[Products] Load Products');
export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ payload: Product[] }>()
);
export const setActiveProduct = createAction(
  '[Products] Set Active Product',
  props<{ payload: Product | null }>()
);

// Cart
export const addToCart = createAction(
  '[Cart] Add Product To Cart',
  props<{ payload: Product['id'] }>()
);
export const removeFromCart = createAction(
  '[Cart] Remove Product From Cart',
  props<{ payload: Product['id'] }>()
);