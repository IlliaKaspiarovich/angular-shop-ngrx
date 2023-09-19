import { Component, Input } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  standalone: true,
  styleUrls: ['./product-card.component.css'],
  imports: [NgbRatingModule]
})
export class ProductCardComponent {
  @Input() product: Product

  constructor(private productService: ProductsService) { }

  onClick() {
    this.productService.setActiveProduct(this.product)
  }
}
