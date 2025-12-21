import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CtaComponent } from '@components/cta/cta.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CtaComponent],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  schemas: [],
})
export class HomeComponent {
  onHandleClick() {
    console.log('Order Nutrition Plan button clicked');
  }
}
