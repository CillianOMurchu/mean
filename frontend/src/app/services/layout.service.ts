import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromEvent, map, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private breakpointObserver = inject(BreakpointObserver);

  isLargeScreen = toSignal(
    this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.XLarge])
      .pipe(map((result) => result.matches)),
    { initialValue: false },
  );

  public readonly windowWidth = toSignal(
    fromEvent(window, 'resize').pipe(map(() => window.innerWidth), startWith(window.innerWidth)),
    { initialValue: window.innerWidth },
  );

  public readonly cols = computed(() => this.computeCols(this.windowWidth()));

  private computeCols(width: number): number {
    if (width < 600) return 2;
    if (width < 960) return 3;
    return 4;
  }
}
