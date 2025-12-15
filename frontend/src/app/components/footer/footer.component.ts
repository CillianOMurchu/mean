import { Component, computed, Input, input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LinkButtonComponent } from '@components/link-button/link-button.component';
import { ScrollService } from '@services/scroll.service';

@Component({
  selector: 'app-footer',
  imports: [MatToolbarModule, LinkButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public isFooterHidden = computed(
    () => this.scrollService.scrollDirection() === 'down',
  );

  footerLinks = [
    { icon: 'local_dining', label: 'Food', route: '/food' },
    { icon: 'local_bar', label: 'Drinks', route: '/drink' },
    { icon: 'favorite', label: 'Favorites', route: '/favourite' },
  ]

  constructor(private scrollService: ScrollService) {}
}
