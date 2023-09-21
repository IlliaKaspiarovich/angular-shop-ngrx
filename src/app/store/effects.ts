import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { ProductsService } from '../services/products.service';

@Injectable()
export class ProductsEffects {

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType('[Products] Load Products'),
    exhaustMap(() => this.productsService.getProducts()
      .pipe(
        map(res => ({ type: '[Product] Load Products Success', payload: res.products })),
        catchError(() => EMPTY)
      ))
  ))
}