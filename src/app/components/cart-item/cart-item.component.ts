import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() product: Product & CartItem

  constructor(private cartService: CartService) {}

  addItem() {
    this.cartService.addCartItemById(this.product.id)
  }

  removeItem() {
    this.cartService.removeCartItemById(this.product.id)
  }
}
