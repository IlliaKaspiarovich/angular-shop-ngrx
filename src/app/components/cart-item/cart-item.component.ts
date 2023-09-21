import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product';
import { addToCart, removeFromCart } from 'src/app/store/actions';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() product: Product & { times: number }

  constructor(private store: Store) {}

  addItem() {
    this.store.dispatch(addToCart({ payload: this.product.id}))
  }

  removeItem() {
    this.store.dispatch(removeFromCart({ payload: this.product.id}))
  }
}
