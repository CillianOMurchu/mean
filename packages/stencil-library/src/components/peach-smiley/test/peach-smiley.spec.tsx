import { newSpecPage } from '@stencil/core/testing';
import { PeachSmiley } from '../peach-smiley';

describe('peach-smiley', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PeachSmiley],
      html: `<peach-smiley></peach-smiley>`,
    });
    expect(page.root).toEqualHtml(`
      <peach-smiley>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </peach-smiley>
    `);
  });
});
