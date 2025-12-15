import {
  Injectable,
  Signal,
  OnDestroy,
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { throttleTime, map, pairwise, takeUntil } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop'; 
export type ScrollDirection = 'up' | 'down' | 'none';

@Injectable({
  providedIn: 'root',
})
export class ScrollService implements OnDestroy {
  private readonly destroy$ = new Subject<void>();

  // The Signal holding the latest calculated direction
  public readonly scrollDirection: Signal<ScrollDirection>;

  constructor() {
    // 1. Create an Observable from the scroll events
    const scrollDirection$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.scrollY),
      pairwise(),
      map(([previousScrollY, currentScrollY]) => {
        if (currentScrollY > previousScrollY) {
          return 'down' as ScrollDirection;
        } else if (currentScrollY < previousScrollY) {
          return 'up' as ScrollDirection;
        } else {
          return 'none' as ScrollDirection;
        }
      }),
      takeUntil(this.destroy$),
    );

    // 2. Convert the Observable to a Signal
    // The initial value is 'none'
    this.scrollDirection = toSignal(scrollDirection$, { initialValue: 'none' });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
