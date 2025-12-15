import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductType } from '../types/product.type';

// This part remains Observable-based because HttpClient returns Observables.
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('http://localhost:3000/api/v1/products');
  }
}
