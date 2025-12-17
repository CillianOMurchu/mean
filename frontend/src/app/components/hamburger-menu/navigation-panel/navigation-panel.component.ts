import { Component, EventEmitter, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterModule } from '@angular/router';
import { routingConfig } from '@constants/routing-config.constant';

@Component({
  selector: 'app-navigation-panel',
  imports: [MatListModule, RouterLink, RouterModule],
  templateUrl: './navigation-panel.component.html',
  styleUrl: './navigation-panel.component.scss',
})
export class NavigationPanelComponent {
  readonly routingConfig = routingConfig;

  @Output() click = new EventEmitter<void>();
}
