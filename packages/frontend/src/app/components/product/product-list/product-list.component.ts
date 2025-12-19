import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { ProductType } from '@models/product-type';
import { ApiService } from '@services/api.service';
import { ProductDetailComponent } from './../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent, MatGridListModule, MatListModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  private api = inject(ApiService);

  isLoading = this.api.isLoading;
  error = this.api.error;
  products = this.api.products;

  barebells = computed(() =>
    this.products().filter(
      (product: ProductType) => product.name?.includes('Barebells'),
    ),
  );
}
