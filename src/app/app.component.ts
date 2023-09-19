import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from './services/products.service';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-shop';
  products: Product[] = []
  activeProduct: Product | null = null
  private activeProductSubscription: Subscription

  constructor(private productService: ProductsService) {
    this.activeProductSubscription = this.productService.activeProductChanges$()
      .subscribe((product) => {
        this.activeProduct = product
      })
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.products
    })
  }

  ngOnDestroy(): void {
    this.activeProductSubscription.unsubscribe();
  }

  closeModal() {
    this.productService.setActiveProduct(null)
  }
}
