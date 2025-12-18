import { newE2EPage } from '@stencil/core/testing';

describe('peach-product-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<peach-product-card></peach-product-card>');

    const element = await page.find('peach-product-card');
    expect(element).toHaveClass('hydrated');
  });
});
