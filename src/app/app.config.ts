import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {providePrimeNG} from "primeng/config";
import {CyanAuraPreset} from "./themes/cyan-aura-theme";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: CyanAuraPreset,
        options: {
          darkModeSelector: '.dark-mode'
        }
      },
      ripple: true
    })
  ]
};
