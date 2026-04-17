import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _isDark = signal(false);
  platformId = inject<Object>(PLATFORM_ID);

  readonly isDark = this._isDark.asReadonly();

  toggleTheme() {
    this._isDark.update(v => !v);
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.classList.toggle('dark');
    }
  }

  setDark(dark: boolean) {
    this._isDark.set(dark);
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.classList.toggle('dark', dark);
    }
  }
}

