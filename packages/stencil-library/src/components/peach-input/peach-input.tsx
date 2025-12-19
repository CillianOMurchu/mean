import { Component, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'peach-input',
  styleUrl: 'peach-input.css',
  shadow: true,
})
export class PeachInput {
  /** The label text above the input */
  @Prop() label: string = '';
  /** The placeholder text */
  @Prop() placeholder: string = 'Enter text...';
  /** The current value */
  @Prop({ mutable: true }) value: string = '';

  /** Track focus state for styling */
  @State() isFocused: boolean = false;

  /** Emitted when the value changes */
  @Event() valueChange!: EventEmitter<string>;

  private handleInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement;
    this.value = input.value;
    this.valueChange.emit(this.value);
  };

  private clearInput = () => {
    this.value = '';
    this.valueChange.emit(this.value);
  };

  render() {
    return (
      <Host>
        <div class={{ 'input-wrapper': true, 'is-focused': this.isFocused }}>
          {this.label && <label>{this.label}</label>}

          <div class="input-container">
            <input
              type="text"
              value={this.value}
              placeholder={this.placeholder}
              onInput={this.handleInput}
              onFocus={() => (this.isFocused = true)}
              onBlur={() => (this.isFocused = false)}
            />

            {this.value && (
              <button class="clear-btn" onClick={this.clearInput}>
                ✕
              </button>
            )}
          </div>
        </div>
      </Host>
    );
  }
}
