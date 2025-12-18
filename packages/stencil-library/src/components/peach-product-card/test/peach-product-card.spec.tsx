import { newSpecPage } from '@stencil/core/testing';
import { PeachProductCard } from '../peach-product-card';

describe('peach-product-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PeachProductCard],
      html: `<peach-product-card></peach-product-card>`,
    });
    expect(page.root).toEqualHtml(`
      <peach-product-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </peach-product-card>
    `);
  });
});
