import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductType } from 'src/app/types/product.interface';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product: ProductType | null = null;

  /** quantity state (mobile-first) */
  qty = signal(1);

  @Output() addToCart = new EventEmitter<{
    product: ProductType;
    qty: number;
  }>();

  increment() {
    this.qty.update((n) => Math.min(n + 1, 99));
  }
  decrement() {
    this.qty.update((n) => Math.max(n - 1, 1));
  }

  onAdd() {
    if (!this.product) return;
    this.addToCart.emit({ product: this.product, qty: this.qty() });
  }
}
