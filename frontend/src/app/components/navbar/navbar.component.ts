import {
  AfterViewInit,
  Component,
  EventEmitter,
  Output,
  signal
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, RouterLink, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true,
})  
export class NavbarComponent implements AfterViewInit {
  @Output() toggleSidenav = new EventEmitter<void>();

  // Controls the intro animation for the logo
  logoVisible = signal(false);

  ngAfterViewInit(): void {
    // Defer to the next frame so the initial styles apply
    requestAnimationFrame(() => this.logoVisible.set(true));
  }
}
