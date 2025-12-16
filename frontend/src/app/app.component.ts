import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LayoutService } from '@services/layout.service';
import { filter } from 'rxjs/internal/operators/filter';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  breakpointObserver = inject(BreakpointObserver);
  drawerOpen = signal(false);
  navItems = [
    { label: 'Home', icon: 'home', route: '/' },
    { label: 'Shop', icon: 'inventory', route: '/shop' },
    { label: 'Contact', icon: 'contact_mail', route: '/contact' },
  ];
  sidenavMode = computed<'side' | 'over'>(() =>
    this.isLargeScreen() ? 'side' : 'over',
  );
  isLargeScreen = inject(LayoutService).isLargeScreen;

  constructor(private router: Router) {
    effect(() => {
      this.drawerOpen.set(this.isLargeScreen());
    });

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
