import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link-button',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.scss',
})
export class LinkButtonComponent {
  @Input() icon = '';
  @Input() label = '';
  @Input() route = '';
  @Input() image = '';

  /**
   * Returns the router path (without query or hash) for use with [routerLink]
   * Example: '/products?brand=barebells' -> '/products'
   */
  get routerPath(): string {
    if (!this.route) return '';
    const withoutHash = this.route.split('#')[0];
    const parts = withoutHash.split('?');
    return parts[0] || '';
  }

  /**
   * Returns an object suitable for [queryParams] or null when there are none.
   */
  get routerQueryParams(): Record<string, string> | null {
    if (!this.route) return null;
    const withoutHash = this.route.split('#')[0];
    const parts = withoutHash.split('?');
    if (parts.length < 2) return null;
    const qs = parts.slice(1).join('?');
    try {
      return Object.fromEntries(new URLSearchParams(qs));
    } catch {
      return null;
    }
  }
}
