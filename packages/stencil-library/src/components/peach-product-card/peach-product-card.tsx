import { Component, h } from '@stencil/core';

@Component({
  tag: 'peach-product-card',
  styleUrl: 'peach-product-card.css',
  shadow: true,
})
export class PeachProductCard {
  private getText(): string {
    return 'Peach Product Card Component';
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
