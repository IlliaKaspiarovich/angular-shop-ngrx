import { createReducer, on } from '@ngrx/store';
import { Product } from '../models/product';
import { getTotalCost } from '../utils';
import {
  loadProductsSuccess,
  setActiveProduct,
  addToCart,
  removeFromCart
} from './actions';

interface InitialState {
  products: Product[],
  activeProduct: Product | null,
  cartItems: (Product & { times: number })[],
  totalCost: number
}

export interface State {
  appStore: InitialState
}

export const initState: InitialState = {
  products: [],
  activeProduct: null,
  cartItems: [],
  totalCost: 0
}

export const reducer = createReducer(
  initState,
  on(loadProductsSuccess, (state, { payload }) => ({ ...state, products: payload })),
  on(setActiveProduct, (state, { payload }) => ({ ...state, activeProduct: payload })),
  on(addToCart, (state, { payload }) => {
    let items = state.cartItems
    const itemToUpdate = items.find((item) => item.id === payload)

    if (itemToUpdate) {
      const cartItems = items.map((item) => (
        item.id === payload ? { ...item, times: item.times + 1} : item
      ))

      return { ...state, cartItems, totalCost: getTotalCost(cartItems) }
    } else {
      const newItem = state.products.find(({ id }) => id === payload)!
      const cartItems = [ ...state.cartItems, { ...newItem, times: 1 }]

      return { ...state, cartItems, totalCost: getTotalCost(cartItems) }
    }
  }),
  on(removeFromCart, (state, { payload }) => {
    let items = state.cartItems
    const itemToRemove = items.find((item) => item.id === payload)!

    if (itemToRemove.times === 1) {
      const cartItems = items.filter((item) => item.id !== payload)
      return { ...state, cartItems, totalCost: getTotalCost(cartItems) }
    } else {
      const cartItems = items.map((item) => (
        item.id === payload ? { ...item, times: item.times - 1 } : item
      ))
      return { ...state, cartItems, totalCost: getTotalCost(cartItems) }
    }
  })
)