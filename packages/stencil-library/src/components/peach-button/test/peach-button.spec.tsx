import { newSpecPage } from '@stencil/core/testing';
import { PeachButton } from '../peach-button';

describe('peach-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PeachButton],
      html: `<peach-button></peach-button>`,
    });
    expect(page.root).toEqualHtml(`
      <peach-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </peach-button>
    `);
  });
});
