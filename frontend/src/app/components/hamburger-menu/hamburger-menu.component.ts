import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hamburger-menu',
  imports: [MatIconModule],
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.scss'
})
export class HamburgerMenuComponent {
  @Input() isOpen = false;
  @Output() toggleSidenav = new EventEmitter<void>();
}
