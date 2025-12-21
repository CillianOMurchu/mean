import { Component } from '@angular/core';
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
}
