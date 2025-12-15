import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  products = inject(ApiService).products$;
}
