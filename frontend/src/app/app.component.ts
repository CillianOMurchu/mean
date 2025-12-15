import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import {
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/internal/operators/map';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

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
    { label: 'Products', icon: 'inventory', route: '/products' },
  ];

  isLargeScreen = toSignal(
    this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.XLarge])
      .pipe(map((result) => result.matches)),
    { initialValue: false },
  );

  sidenavMode = computed<'side' | 'over'>(() =>
    this.isLargeScreen() ? 'side' : 'over',
  );

  constructor(private router: Router) {
    effect(() => {
      if (this.isLargeScreen()) {
        this.drawerOpen.set(true);
      }
    });
  }

  checkRouter = computed(() => {
    return this.router.url === '/products';
  });

  showRoute() {
    console.log(this.router.url);
  }

  toggleSidenav() {
    this.drawerOpen.set(!this.drawerOpen());
  }

  checkLinkActive(route: string): string {
    return this.router.url === route ? 'active' : '';
  }

  closeSidenavOnSmallScreen() {
    if (this.sidenavMode() === 'over') {
      this.drawerOpen.set(false);
    }
  }
}
