import { Component } from '@angular/core';
import { ProductListComponent } from '@components/product/product-list/product-list.component';

@Component({
  selector: 'app-home',
  imports: [ProductListComponent],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {}
