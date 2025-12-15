import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/internal/operators/map';
import { MatIconModule } from '@angular/material/icon';
import { TW_CLASSES } from './styles/tailwind-classes.const';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
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
  // TW_CLASSES = TW_CLASSES;

  breakpointObserver = inject(BreakpointObserver);

  title = 'Peach Nutrition';

  drawerOpen = signal(false);

  navItems = [
    { label: 'Home', icon: 'home', route: 'home' },
    { label: 'Products', icon: 'inventory', route: 'products' },
  ];

  isLargeScreen = toSignal(
    this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.XLarge])
      .pipe(map((result) => result.matches)),
    { initialValue: false },
  );

  // Computed signal for the Sidenav's display mode (side or over)
  sidenavMode = computed<'side' | 'over'>(() =>
    this.isLargeScreen() ? 'side' : 'over',
  );

  activeRoute = signal('Home');

  constructor() {
    // Effect to automatically open the sidenav when the screen becomes large
    effect(() => {
      if (this.isLargeScreen()) {
        this.drawerOpen.set(true);
      }
    });
  }

  toggleSidenav() {
    this.drawerOpen.set(!this.drawerOpen());
  }

  setActiveRoute(route: string) {
    console.log('route is ', route);
    this.activeRoute.set(route);
  }

  closeSidenavOnSmallScreen() {
    if (this.sidenavMode() === 'over') {
      this.drawerOpen.set(false);
    }
  }
}
