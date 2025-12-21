import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { ProductCardComponent } from '@components/product/product-card/product-card.component';
import { ApiService } from '@services/api.service';
import { ProductType } from 'src/app/types/product.interface';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, MatGridListModule, MatListModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  private api = inject(ApiService);

  isLoading = this.api.isLoading;
  error = this.api.error;
  protected products = this.api.products;

  barebells = computed(() =>
    this.products()
  .filter((product: ProductType) =>
      product.name?.includes('Barebells'),
    ),
  );
  
}
