import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatGridListModule } from '@angular/material/grid-list';
import { ApiService } from '@services/api.service';
import { fromEvent, map, startWith } from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [MatGridListModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  products = inject(ApiService).products$;

  // Track viewport width and derive responsive columns (minimum 2)
  private viewportWidth = toSignal(
    fromEvent(window, 'resize').pipe(
      map(() => window.innerWidth),
      startWith(window.innerWidth),
    ),
    { initialValue: window.innerWidth },
  );

  cols = computed(() => this.determineCols(this.viewportWidth()));

  // Derived tiles with a dynamic colspan, rowspan and background color
  tiles = computed(() => {
    const list = this.products() ?? [];
    const cols = this.cols();
    const maxAllowedSpan = Math.max(1, cols - 1); // ensure at least 1 column remains

    // Create a deterministic, seeded shuffle of the palette for this product list
    const seed = list
      .map((p, idx) => (p as any).id ?? (p as any).name ?? idx)
      .join('|');
    const shuffledPalette = this.seededShuffle(
      this.palette,
      this.hashStringToInt(seed),
    );

    return list.map((product, i) => ({
      ...product,
      colspan: Math.min(this.determineColspan(product, i), maxAllowedSpan),
      rowspan: this.determineRowspan(product, i),
      backgroundColor:
        (product as any).backgroundColor ??
        shuffledPalette[i % shuffledPalette.length],
    }));
  });

  // A small, pleasant palette matching the theme
  private readonly palette = [
    '#6aebfc',
    '#6d9efc',
    '#937df8',
    '#f78ef0',
    '#ffbcb3'
  ];

  // Hash a string to a 32-bit integer (FNV-1a)
  private hashStringToInt(s: string): number {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
    return h >>> 0;
  }

  // Mulberry32 PRNG seeded with an integer
  private mulberry32(seed: number) {
    return function () {
      let t = (seed += 0x6d2b79f5) >>> 0;
      t = Math.imul(t ^ (t >>> 15), t | 1) >>> 0;
      t ^= (t + Math.imul(t ^ (t >>> 7), t | 61)) >>> 0;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // Deterministic Fisher-Yates shuffle using seeded PRNG
  private seededShuffle<T>(arr: T[], seedInt: number): T[] {
    const a = arr.slice();
    const rand = this.mulberry32(seedInt);
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  private determineColspan(product: any, index: number): number {
    if ((product as any).featured) return 3;
    if (index % 5 === 0) return 2;
    return 1;
  }

  private determineRowspan(product: any, index: number): number {
    if ((product as any).featured) return 2;
    if (index % 7 === 0) return 2;
    return 2;
  }

  private determineCols(width: number): number {
    if (width < 600) return 2;
    if (width < 960) return 3;
    return 4;
  }
}
