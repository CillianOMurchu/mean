import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { filter } from 'rxjs/internal/operators/filter';
import { FooterComponent } from './components/footer/footer.component';
import { routingConfig } from './constants/routing-config.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    RouterModule,
    RouterLink,
    NavbarComponent,
    FooterComponent,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'Peach Nutrition';

  readonly routingConfig = routingConfig;

  breakpointObserver = inject(BreakpointObserver);
  drawerOpen = signal(false);

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.onDrawerClose());
  }

  onDrawerClose() {
    this.drawerOpen.set(false);
  }

  toggleSidenav() {
    this.drawerOpen.set(!this.drawerOpen());
  }
}
