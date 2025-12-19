import { newSpecPage } from '@stencil/core/testing';
import { PeachCard } from '../peach-card';

describe('peach-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PeachCard],
      html: `<peach-card></peach-card>`,
    });
    expect(page.root).toEqualHtml(`
      <peach-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </peach-card>
    `);
  });
});
