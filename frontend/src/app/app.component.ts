import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { ScrollService } from '@services/scroll.service';
import { ProductType } from './types/product.type';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  standalone: true,
})
export class AppComponent {
  title = 'frontend';
  private scrollService = inject(ScrollService);

  scrollDirectionSignal = this.scrollService.scrollDirection;
}
