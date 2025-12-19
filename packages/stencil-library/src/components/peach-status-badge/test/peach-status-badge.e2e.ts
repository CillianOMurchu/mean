import { newE2EPage } from '@stencil/core/testing';

describe('peach-status-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<peach-status-badge></peach-status-badge>');

    const element = await page.find('peach-status-badge');
    expect(element).toHaveClass('hydrated');
  });
});
