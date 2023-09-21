import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  isCartOpened = false
  totalCost$ = this.store.select((state) =>  state.appStore.totalCost)
  cartItems$ = this.store.select((state) =>  state.appStore.cartItems)

  constructor(private store: Store<State>) {}

  toggleCart() {
    this.isCartOpened = !this.isCartOpened
  }
}