import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  isCartOpened = false
  cartProducts: Array<Product & CartItem>
  totalCost = 0

  constructor(
    private cartService: CartService,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    combineLatest([
      this.productService.getProducts(),
      this.cartService.cartItemsChanges$()
    ]).subscribe((value) => {
      const products = value[0].products
      const cartItems = value[1]
      let newTotalCost = 0

      this.cartProducts = cartItems.map(({ id, times }) => {
        const product = products.find((product) => product.id === id)!
        newTotalCost += product.price * times

        return { ...product, times }
      })
      this.totalCost = newTotalCost
    })
  }

  toggleCart() {
    this.isCartOpened = !this.isCartOpened
  }
}


