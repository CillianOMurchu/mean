import { AfterViewInit, Component, Input } from '@angular/core';
import { ProductType } from '@models/product.type';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements AfterViewInit {
  @Input() product: ProductType | null = null;

  ngAfterViewInit() {
    console.log('product in detail is', this.product);
  }
}
