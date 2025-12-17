import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavigationPanelComponent } from '@components/hamburger-menu/navigation-panel/navigation-panel.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { filter } from 'rxjs/internal/operators/filter';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    // RouterModule,
    NavbarComponent,
    FooterComponent,
    MatSidenavModule,
    MatIconModule,
    NavigationPanelComponent,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  router = inject(Router);

  title = 'Peach Nutrition';
  drawerOpen = signal(false);

  constructor() {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        if (this.drawerOpen()) this.onDrawerClose();
      });
  }

  onDrawerClose() {
    this.drawerOpen.set(false);
  }

  toggleSidenav() {
    this.drawerOpen.set(!this.drawerOpen());
  }
}
