import { newE2EPage } from '@stencil/core/testing';

describe('peach-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<peach-input></peach-input>');

    const element = await page.find('peach-input');
    expect(element).toHaveClass('hydrated');
  });
});
