import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { baseInterceptor } from './base.interceptor';
import { IconService } from './services/icon.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([baseInterceptor])),
    // initialize icons on app startup
    {
      provide: APP_INITIALIZER,
      useFactory: (iconService: IconService) => () => {
        // ensure registration has run; registerIcons is idempotent
        iconService.registerIcons?.();
        return Promise.resolve();
      },
      deps: [IconService],
      multi: true,
    },
  ],
};
