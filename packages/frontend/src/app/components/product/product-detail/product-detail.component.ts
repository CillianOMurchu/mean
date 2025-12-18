import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProductType } from '@models/product-type';

@Component({
  selector: 'app-product-detail',
  imports: [MatCardModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductDetailComponent implements AfterViewInit {
  @Input() product: ProductType | null = null;

  get safeImages() {
    return Array.isArray(this.product?.images) && this.product?.images.length
      ? this.product?.images
      : [
          'https://plus.unsplash.com/premium_photo-1765842914647-742af308db74?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ];
  }

  ngAfterViewInit() {
    console.log('product in detail is', this.product);
  }
}
