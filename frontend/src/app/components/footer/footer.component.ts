import { Component, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LinkButtonComponent } from '@components/link-button/link-button.component';
import { routingConfig } from '@constants/routing-config.constant';
import { ScrollService } from '@services/scroll.service';

@Component({
  selector: 'app-footer',
  imports: [MatToolbarModule, MatIconModule, LinkButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly routingConfig = routingConfig;

  public isFooterHidden = computed(
    () => this.scrollService.scrollDirection() === 'down',
  );

  constructor(private scrollService: ScrollService) {}
}
