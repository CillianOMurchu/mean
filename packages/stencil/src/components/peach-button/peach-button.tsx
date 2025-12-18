import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'peach-button',
  styleUrl: 'peach-button.css',
  shadow: true,
})
export class PeachButton {
  @Prop() appearance: 'primary' | 'secondary' = 'primary';
  @Prop() text: string = 'Click Me';
  @Event() peachClick: EventEmitter<void>;

  render() {
    return (
      <Host>
        <button class={`btn-${this.appearance}`} onClick={() => this.peachClick.emit()}>
          {this.text}
        </button>
      </Host>
    );
  }
}
