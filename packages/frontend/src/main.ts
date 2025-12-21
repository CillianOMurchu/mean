import { bootstrapApplication } from '@angular/platform-browser';
import { defineCustomElements } from '../../stencil-library/loader';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
  
defineCustomElements();

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);
