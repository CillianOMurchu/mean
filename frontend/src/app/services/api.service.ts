import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ProductType } from '../types/product.type';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);

  private getProducts$ = this.http.get<ProductType[]>(
    'http://localhost:3000/api/v1/products',
  );

  // Expose products as a Signal
  public readonly products$ = toSignal(this.getProducts$);
}
