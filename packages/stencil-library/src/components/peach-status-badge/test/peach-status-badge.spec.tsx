import { newSpecPage } from '@stencil/core/testing';
import { PeachStatusBadge } from '../peach-status-badge';

describe('peach-status-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PeachStatusBadge],
      html: `<peach-status-badge></peach-status-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <peach-status-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </peach-status-badge>
    `);
  });
});
