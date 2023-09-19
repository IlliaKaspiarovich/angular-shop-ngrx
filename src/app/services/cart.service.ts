import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([])

  constructor() { }

  addCartItemById(id: number) {
    const items = this.cartItems.getValue()
    const itemToUpdate = items.find((item) => item.id === id)

    if (itemToUpdate) {
      itemToUpdate.times = itemToUpdate.times + 1;
    } else {
      items.push({ id, times: 1})
    }

    this.cartItems.next(items)
  }

  removeCartItemById(id: number) {
    let items = this.cartItems.getValue()
    const itemToRemove = items.find((item) => item.id === id)!

    if (itemToRemove.times === 1) {
      items = items.filter((item) => item.id !== id)
    } else {
      itemToRemove.times = itemToRemove.times - 1
    }

    this.cartItems.next(items)
  }

  cartItemsChanges$(): Observable<CartItem[]> {
    return this.cartItems.asObservable()
  }
}
