import { CurrencyPipe } from '@angular/common';
import {
  AfterViewInit,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  input,
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
  product = input<ProductType | null>(null);

  panelOpenState = signal(false);

  safeImages = computed(() => {
    const images = this.product()?.images;
    const placeholder = '/smiley.png';

    if (Array.isArray(images) && images.length > 0) {
      return images;
    }

    return [placeholder];
  });

  heroImage = computed(() => this.safeImages()[0]);
  hasMultipleImages = computed(() => this.safeImages().length > 1);

  ngAfterViewInit() {}
}
