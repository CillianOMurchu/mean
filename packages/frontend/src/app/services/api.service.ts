import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, resource, Signal } from '@angular/core';
import { environment } from '@environments/environment';
import { firstValueFrom } from 'rxjs';
import { ProductType } from 'src/app/types/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiBaseUrl}/products`;

  public readonly productsResource = resource<ProductType[], undefined>({
    loader: async () => {
      return firstValueFrom(this.http.get<ProductType[]>(this.apiUrl));
    },
  });

  public readonly products: Signal<ProductType[]> = computed(() =>
    this.productsResource.hasValue() ? this.productsResource.value() : [],
  );

  public readonly isLoading = computed(() => this.productsResource.isLoading());

  public readonly error = computed(() =>
    this.productsResource.error ? this.productsResource.error() : null,
  );
}
