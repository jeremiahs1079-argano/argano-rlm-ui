import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductResponse } from '../../models/product-response.model';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProduct(): Observable<Product> {
    return this.httpClient.get<Product>('assets/data/product.json');
  }
}
