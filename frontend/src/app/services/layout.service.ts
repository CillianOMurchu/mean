import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  constructor() {}

  private breakpointObserver = inject(BreakpointObserver);

  isLargeScreen = toSignal(
    this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.XLarge])
      .pipe(map((result) => result.matches)),
    { initialValue: false },
  );
}
