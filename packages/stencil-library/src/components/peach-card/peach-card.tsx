import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'peach-card',
  styleUrl: 'peach-card.css',
  shadow: true,
})
export class PeachCard {
  /** Optional title for the card header */
  @Prop() cardTitle?: string;
  
  /** Optional subtitle or category text */
  @Prop() subtitle?: string;

  /** Controls whether the card has a hover lifting effect */
  @Prop() hoverable: boolean = true;

  render() {
    return (
      <Host>
        <div class={{
          'card': true,
          'is-hoverable': this.hoverable
        }}>
          {(this.cardTitle || this.subtitle) && (
            <div class="header">
              {this.subtitle && <span class="subtitle">{this.subtitle}</span>}
              {this.cardTitle && <h2 class="title">{this.cardTitle}</h2>}
            </div>
          )}
          
          <div class="body">
            <slot></slot>
          </div>

          <div class="footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </Host>
    );
  }
}