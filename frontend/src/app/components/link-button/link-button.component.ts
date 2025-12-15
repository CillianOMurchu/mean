import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-link-button',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.scss',
})
export class LinkButtonComponent {
  @Input() icon!: string;
  @Input() label!: string;
  @Input() route!: string;
}
