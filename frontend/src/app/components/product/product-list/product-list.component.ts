import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ApiService } from '@services/api.service';
import { LayoutService } from '@services/layout.service';
import {
  defaultHeavySpanOptions,
  defaultSpanOptions,
  pickSpanForProduct,
  seededPaletteFromList,
  seededSpansFromList,
} from '@utils/seeded-rng';
import { productPalette } from 'src/app/styles/_theme';
import { ProductDetailComponent } from './../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent, MatGridListModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  private layout = inject(LayoutService);
  private api = inject(ApiService);

  products = this.api.products;
  isLoading = this.api.isLoading;
  error = this.api.error;

  cols = this.layout.cols;
  tiles = computed(() => {
    const list = this.products() ?? [];
    const cols = this.cols();
    const maxAllowedSpan = Math.max(1, cols - 1); // ensure at least 1 column remains

    // Prepare deterministic shuffles for palette and span choices
    const shuffledPalette = seededPaletteFromList(this.palette, list);
    const shuffledSpans = seededSpansFromList(this.spanOptions, list);

    return list.map((product, i) => {
      // Pick an appropriate span (heavy if featured)
      const rawSpan = pickSpanForProduct(
        product,
        i,
        shuffledSpans,
        this.heavySpanOptions,
      );

      const colspan = Math.max(1, Math.min(rawSpan[0], maxAllowedSpan));
      const rowspan = Math.max(1, Math.min(rawSpan[1], 4));

      const backgroundColor =
        product.backgroundColor ?? shuffledPalette[i % shuffledPalette.length];
      const imageUrl = (product as any).images?.[0]?.src
        ? (product as any).images[0].src.replace('/src/assets/', '/assets/')
        : null;
      const backgroundStyle = imageUrl
        ? `${backgroundColor} url(${imageUrl}) center/contain no-repeat`
        : backgroundColor;

      return {
        ...product,
        colspan,
        rowspan,
        backgroundColor,
        imageUrl,
        backgroundStyle,
      };
    });
  });

  private readonly palette = productPalette;
  private readonly spanOptions = defaultSpanOptions;
  private readonly heavySpanOptions = defaultHeavySpanOptions;
}
