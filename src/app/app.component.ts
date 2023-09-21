import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from './models/product';
import { loadProducts, setActiveProduct } from './store/actions';
import { State } from './store/reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-shop';
  products$: Observable<Product[]> = this.store.select(state => state.appStore.products)
  activeProduct$: Observable<Product | null> = this.store.select(state => state.appStore.activeProduct)

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(loadProducts())
  }

  closeModal() {
    this.store.dispatch(setActiveProduct({ payload: null }))
  }
}
