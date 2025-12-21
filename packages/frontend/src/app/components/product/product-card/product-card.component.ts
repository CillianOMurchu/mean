import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductType } from 'src/app/types/product.interface';

@Component({
  selector: 'app-product-card',
  imports: [MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product: ProductType | null = null;

  get safeImages() {
    const images =
      Array.isArray(this.product?.images) && this.product?.images.length
        ? this.product.images
        : null;
    console.log('safeImages called, returning:', images);
    return images;
  }
}
