import { AfterViewInit, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link-button',
  imports: [MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.scss',
})
export class LinkButtonComponent implements AfterViewInit {
  @Input() icon!: string;
  @Input() label!: string;
  @Input() route!: string;

  constructor() {
    console.log('route is ', this.route);
  }

  ngAfterViewInit() {
    console.log('route after view init is ', this.route);
  }

}
