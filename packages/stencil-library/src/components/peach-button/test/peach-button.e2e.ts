import { newE2EPage } from '@stencil/core/testing';

describe('peach-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<peach-button></peach-button>');

    const element = await page.find('peach-button');
    expect(element).toHaveClass('hydrated');
  });
});
