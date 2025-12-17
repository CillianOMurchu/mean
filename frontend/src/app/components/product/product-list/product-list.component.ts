import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductType } from '@models/product.type';
import { ApiService } from '@services/api.service';
import { LayoutService } from '@services/layout.service';
import { ProductDetailComponent } from './../product-detail/product-detail.component';

interface TileType {
  text: string;
  cols: number;
  rows: number;
  color: string;
  product: ProductType;
}

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent, MatGridListModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  private layout = inject(LayoutService);
  private api = inject(ApiService);

  cols = this.layout.cols;

  // tiles = computed<TileType[]>(() =>
  //   (this.api.products() ?? []).map(
  //     (product: ProductType) =>
  //       ({
  //         cols: 1,
  //         rows: 1,
  //         color: 'green',
  //         product: product,
  //       }) as TileType,
  //   ),
  // );

  isLoading = this.api.isLoading;
  error = this.api.error;

  // Expose the raw products signal for template/debugging
  products = this.api.products;

  // Debug helper to inspect current value in the console
  debugDump() {
    console.log('products', this.products());
  }
}
