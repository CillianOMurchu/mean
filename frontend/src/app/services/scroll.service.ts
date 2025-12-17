import { Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';
import { map, pairwise, throttleTime } from 'rxjs/operators';

export type ScrollDirection = 'up' | 'down' | 'none';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  public readonly scrollDirection: Signal<ScrollDirection> = toSignal(
    fromEvent(window, 'scroll').pipe(
      throttleTime(10), 
      map(() => window.scrollY), 
      pairwise(), 
      map(([previousScrollY, currentScrollY]) => {
        if (currentScrollY > previousScrollY) {
          return 'down' as ScrollDirection;
        } else if (currentScrollY < previousScrollY) {
          return 'up' as ScrollDirection;
        }
        return 'none' as ScrollDirection;
      })
    ),
    { 
      initialValue: 'none' 
    }
  );
}