import { CurrencyPipe } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  signal,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProductType } from 'src/app/types/product.interface';

@Component({
  selector: 'app-product-detail',
  imports: [MatCardModule, MatExpansionModule, CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductDetailComponent implements AfterViewInit {
  @Input() product: ProductType | null = null;
  panelOpenState = signal(false);

  get safeImages() {
    return Array.isArray(this.product?.images) && this.product?.images.length
      ? this.product?.images
      : null;
  }

  ngAfterViewInit() {}
}
