import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { WINDOW } from './core/tokens/window.token';
import { WA_WINDOW } from '@ng-web-apis/common';

const mockMatchMedia = (query: string) => ({
  matches: false,
  media: query,
  onchange: null,

  addEventListener: () => {},
  removeEventListener: () => {},

  addListener: () => {},
  removeListener: () => {},

  dispatchEvent: () => true,
});

const mockWindow: Partial<Window> = {
  matchMedia: mockMatchMedia as any,
  innerWidth: 1024,
  innerHeight: 768,
  document: {
    documentElement: {
      classList: {
        add: () => {},
        remove: () => {},
        toggle: () => {},
        contains: () => false,
      },
    },
  } as any,
};

const serverConfig: ApplicationConfig = {
  providers: [
    { provide: WINDOW, useValue: mockWindow as Window },
    { provide: WA_WINDOW, useValue: mockWindow as any },
    provideServerRendering(withRoutes(serverRoutes)),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
