import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { ProductType } from 'src/app/types/product.interface';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, MatCard, MatCardContent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product: ProductType | null = null;
}
