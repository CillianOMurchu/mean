import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LinkButtonComponent } from '@components/link-button/link-button.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, LinkButtonComponent],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {
  imageLoaded = false as boolean;

  brandsConfig = [
    {
      src: '/barebell/logo-barebells.svg',
      route: '/products?brand=barebells',
      alt: 'Barebells Logo',
    },
    {
      src: '/iogenix/logo-iogenix.png',
      route: '/products?brand=iogenix',
      alt: 'Iogenix Logo',
    },
    {
      src: '/nocco/logo-nocco.svg',
      route: '/products?brand=nocco',
      alt: 'Nocco Logo',
    },
  ];

  onImageLoad() {
    this.imageLoaded = true;
  }
}
