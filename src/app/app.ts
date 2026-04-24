import { Component, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, ViewportScroller } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { TuiRoot } from '@taiga-ui/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Nexora-X-Enterprise-Dashboard');
  private readonly _router = inject(Router);
  private readonly _viewportScroller = inject(ViewportScroller);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && isPlatformBrowser(this.platformId)) {
        // Use a small timeout to ensure the view has settled before scrolling
        setTimeout(() => {
          this._viewportScroller.scrollToPosition([0, 0]);
          
          // Double-check with standard window.scrollTo for maximum reliability
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 10);
      }
    });
  }
}

