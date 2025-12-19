import { newE2EPage } from '@stencil/core/testing';

describe('peach-smiley', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<peach-smiley></peach-smiley>');

    const element = await page.find('peach-smiley');
    expect(element).toHaveClass('hydrated');
  });
});
