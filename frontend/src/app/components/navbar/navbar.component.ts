import { Component, EventEmitter, Input, Output } from '@angular/core';
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
export class NavbarComponent {
  @Output() toggleSidenav = new EventEmitter<void>();
  @Input() isOpen = false;
}
