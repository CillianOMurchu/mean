import { newE2EPage } from '@stencil/core/testing';

describe('peach-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<peach-card></peach-card>');

    const element = await page.find('peach-card');
    expect(element).toHaveClass('hydrated');
  });
});
