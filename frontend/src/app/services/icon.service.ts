import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {}

  registerIcons(): void {
    const icons = ['steak', 'chess_knight'];

    console.log('Registering icons:', icons);

    icons.forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`/icons/${icon}.svg`),
      );
    });

    console.log('Icons registered successfully.', this.matIconRegistry);
  }
}
