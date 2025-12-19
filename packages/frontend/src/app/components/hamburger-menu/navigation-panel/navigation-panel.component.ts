import { Component, EventEmitter, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { LinkButtonComponent } from '@components/link-button/link-button.component';
import { TreeMenuComponent } from '@components/tree-menu/tree-menu.component';
import { routingConfig } from '@constants/routing-config.constant';

@Component({
  selector: 'app-navigation-panel',
  imports: [
    MatListModule,
    RouterModule,
    TreeMenuComponent,
    LinkButtonComponent,
  ],
  templateUrl: './navigation-panel.component.html',
  styleUrl: './navigation-panel.component.scss',
})
export class NavigationPanelComponent {
  readonly routingConfig = routingConfig;

  @Output() click = new EventEmitter<void>();
}
