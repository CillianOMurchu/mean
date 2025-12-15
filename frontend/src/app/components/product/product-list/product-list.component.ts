import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ApiService } from '@services/api.service';
import { ProductType } from 'src/app/types/product.type';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  private apiService = inject(ApiService);

  products = toSignal(this.apiService.getProducts(), {
    initialValue: [] as ProductType[],
  });
}
