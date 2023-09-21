import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = 'https://dummyjson.com/products'

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Record<'products', Product[]>> {
    return this.http.get(this.url) as Observable<Record<'products', Product[]>>
  }
}
