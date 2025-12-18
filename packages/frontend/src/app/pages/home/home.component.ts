import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  onHandleClick() {
    console.log('Order Nutrition Plan button clicked');
  }
}
