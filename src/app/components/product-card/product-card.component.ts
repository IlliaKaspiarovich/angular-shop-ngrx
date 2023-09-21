import { Component, Input } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product';
import { setActiveProduct } from '../../store/actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  standalone: true,
  styleUrls: ['./product-card.component.css'],
  imports: [NgbRatingModule]
})
export class ProductCardComponent {
  @Input() product: Product

  constructor(private store: Store) { }

  onClick() {
    this.store.dispatch(setActiveProduct({ payload: this.product }))
  }
}
