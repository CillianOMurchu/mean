import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'peach-status-badge',
  styleUrl: 'peach-status-badge.css',
  shadow: true,
})
export class PeachStatusBadge {
  @Prop() status: 'success' | 'warning' | 'error' = 'success';
  @Prop() label: string = 'Active';

  render() {
    return (
      <Host>
        <div class={`badge-container ${this.status}`}>
          <span class="dot"></span>
          {this.label}
        </div>
      </Host>
    );
  }
}