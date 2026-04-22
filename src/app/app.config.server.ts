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
  requestAnimationFrame: ((callback: FrameRequestCallback) =>
    setTimeout(() => callback(Date.now()), 16) as unknown as number) as typeof window.requestAnimationFrame,
  cancelAnimationFrame: ((handle: number) =>
    clearTimeout(handle)) as typeof window.cancelAnimationFrame,
  addEventListener: () => {},
  removeEventListener: () => {},
  navigator: {
    userAgent: 'Angular SSR',
    maxTouchPoints: 0,
    webdriver: false,
  } as Navigator,
  visualViewport: {
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
    onresize: null,
    onscroll: null,
    width: 1024,
    height: 768,
    scale: 1,
    offsetLeft: 0,
    offsetTop: 0,
    pageLeft: 0,
    pageTop: 0,
  } as unknown as VisualViewport,
  document: {
    addEventListener: () => {},
    removeEventListener: () => {},
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
