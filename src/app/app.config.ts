import { provideTaiga } from '@taiga-ui/core';
import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withRouterConfig,
  withComponentInputBinding,
  withViewTransitions,
  withInMemoryScrolling,
} from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withViewTransitions({
        onViewTransitionCreated: ({ transition, from, to }) => {
          // You can handle transition-specific logic here if needed
          // e.g., logging or controlling specific transitions
        },
      }),
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      }),
    ),

    provideClientHydration(),
    provideAnimations(),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),

    // PrimeNG
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),

    // Taiga UI
    provideTaiga(),
  ],
};
