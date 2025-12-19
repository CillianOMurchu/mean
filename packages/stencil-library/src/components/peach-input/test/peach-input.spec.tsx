import { newSpecPage } from '@stencil/core/testing';
import { PeachInput } from '../peach-input';

describe('peach-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PeachInput],
      html: `<peach-input></peach-input>`,
    });
    expect(page.root).toEqualHtml(`
      <peach-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </peach-input>
    `);
  });
});
