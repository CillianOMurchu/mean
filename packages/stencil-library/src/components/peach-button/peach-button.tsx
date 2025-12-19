import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'peach-button',
  styleUrl: 'peach-button.css',
  shadow: true,
})
export class PeachButton {
  /** The visual style of the button */
  @Prop() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  
  /** Disables the button interaction */
  @Prop() disabled: boolean = false;

  /** Emitted when the button is clicked */
  @Event() peachClick: EventEmitter<void> | undefined;

  private handleClick = () => {
    if (!this.disabled) {
      this.peachClick?.emit();
    }
  };

  render() {
    return (
      <Host>
        <button
          type="button"
          class={{
            'btn': true,
            [`btn-${this.variant}`]: true,
            'is-disabled': this.disabled,
          }}
          disabled={this.disabled}
          onClick={this.handleClick}
        >
          <slot name="icon-start"></slot>
          <span class="label">
            <slot></slot>
          </span>
          <slot name="icon-end"></slot>
        </button>
      </Host>
    );
  }
}