import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = 'https://dummyjson.com/products'
  private activeProduct = new BehaviorSubject<Product | null>(null)

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Record<'products', Product[]>> {
    return this.http.get(this.url) as Observable<Record<'products', Product[]>>
  }

  setActiveProduct(product: Product | null) {
    this.activeProduct.next(product)
  }

  activeProductChanges$(): Observable<Product | null> {
    return this.activeProduct.asObservable()
  }
}
