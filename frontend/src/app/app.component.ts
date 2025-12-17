import { BreakpointObserver } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
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
    RouterModule,
    NavbarComponent,
    FooterComponent,
    MatSidenavModule,
    MatIconModule,
    NavigationPanelComponent,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'Peach Nutrition';

  private router = inject(Router);
  private document = inject(DOCUMENT);

  breakpointObserver = inject(BreakpointObserver);
  drawerOpen = signal(false);

  private currentUrl = signal(this.router.url);

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => {
        this.currentUrl.set(this.router.url);
        this.onDrawerClose();
      });
  }

  ngOnInit() {
    const link = this.document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Roboto&display=swap';
    this.document.head.appendChild(link);
  }

  isRouteActive(route: string): boolean {
    const exact = route === '/';
    const url = this.currentUrl();
    if (exact) return url === route;

    // subset match: the route is active if the current URL starts with the route
    return url === route || url.startsWith(route + '/');
  }

  closeDrawer() {
    this.drawerOpen.set(false);
  }

  onDrawerClose() {
    this.drawerOpen.set(false);
  }

  toggleSidenav() {
    this.drawerOpen.set(!this.drawerOpen());
  }
}
