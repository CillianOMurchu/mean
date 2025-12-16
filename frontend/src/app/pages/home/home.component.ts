import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {
  imageLoaded = false as boolean;

  onImageLoad() {
    this.imageLoaded = true;
  }
}
