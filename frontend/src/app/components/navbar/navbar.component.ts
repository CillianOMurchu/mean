import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { HamburgerMenuComponent } from '@components/hamburger-menu/hamburger-menu.component';

@Component({
  selector: 'app-navbar',
  imports: [
    MatToolbarModule,
    RouterLink,
    MatIconModule,
    HamburgerMenuComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true,
})
export class NavbarComponent implements AfterViewInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  @Input() isOpen = false;

  // Controls the intro animation for the logo
  logoVisible = signal(false);

  ngAfterViewInit(): void {
    // Defer to the next frame so the initial styles apply
    requestAnimationFrame(() => this.logoVisible.set(true));
  }
}
