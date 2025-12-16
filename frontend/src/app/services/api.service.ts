import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, resource, Signal } from '@angular/core';
import { ProductType } from '@models/product.type';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiBaseUrl}/products`;

  public readonly productsResource = resource({
    loader: async () => {
      return firstValueFrom(this.http.get<ProductType[]>(this.apiUrl));
    },
  });

  // Convenience computed signals derived from the resource
  public readonly products: Signal<ProductType[]> = computed(() =>
    this.productsResource.hasValue() ? this.productsResource.value() : [],
  );
  public readonly isLoading = computed(() => this.productsResource.isLoading());
  public readonly error = computed(() =>
    this.productsResource.error ? this.productsResource.error() : null,
  );
}
