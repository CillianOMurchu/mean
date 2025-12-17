import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ApiService } from '@services/api.service';
import { ProductDetailComponent } from './../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent, MatGridListModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  private api = inject(ApiService);

  isLoading = this.api.isLoading;
  error = this.api.error;
  products = this.api.products;
}
