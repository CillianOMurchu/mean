import { Component, EventEmitter, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { routingConfig } from '@constants/routing-config.constant';

@Component({
  selector: 'app-navigation-panel',
  imports: [MatListModule, RouterModule],
  templateUrl: './navigation-panel.component.html',
  styleUrl: './navigation-panel.component.scss',
  schemas: [],
})
export class NavigationPanelComponent {
  readonly routingConfig = routingConfig;

  @Output() click = new EventEmitter<void>();
}
