import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  imports: [],
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.scss'
})
export class HamburgerMenuComponent {
  @Input() isOpen = false;
  @Output() clicktoggleSidenav!: () => void;
}
