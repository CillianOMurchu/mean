import { Injectable, Signal } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime, map, pairwise } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';

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
      // Set the initial value for the signal
      initialValue: 'none' 
    }
  );
}