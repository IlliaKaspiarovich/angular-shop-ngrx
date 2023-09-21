import { Product } from "../models/product";

export const getTotalCost = (cartItems: (Product & { times: number })[]): number => {
  return cartItems.reduce((sum, { price, times }) => sum + (price * times), 0)
}