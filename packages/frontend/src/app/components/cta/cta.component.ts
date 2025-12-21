import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-cta',
  imports: [RouterLinkWithHref, MatIconModule, MatButtonModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss',
})
export class CtaComponent {
  /** Button text/content fallback */
  @Input() label = 'SHOP NOW';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  /** Make button take full container width (useful on mobile) */
  @Input() fullWidth = false;
  @Input() ariaLabel?: string;

  @Output() ctaClick = new EventEmitter<Event>();

  title = signal('Shop Now');
  link = signal('/products');

  handleClick(e: Event) {
    if (this.disabled) {
      e.preventDefault();
      e.stopImmediatePropagation();
      return;
    }
    this.ctaClick.emit(e);
  }
}
