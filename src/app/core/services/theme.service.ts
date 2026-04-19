import { Injectable, inject, signal, PLATFORM_ID, effect } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  darkMode = signal(false);

  constructor() {
    this.loadThemeFromStorage();

    // Automatically update HTML class when darkMode signal changes
    effect(() => {
      this.updateHtmlClass();
      this.saveThemeToStorage();
    });
  }

  toggleDarkMode(): void {
    this.darkMode.update(v => !v);
  }

  setDarkMode(isDark: boolean): void {
    this.darkMode.set(isDark);
  }

  private updateHtmlClass(): void {
    if (!this.isBrowser) return;

    const html = document.documentElement;
    if (this.darkMode()) {
      html.classList.add('dark');
      html.style.colorScheme = 'dark';
    } else {
      html.classList.remove('dark');
      html.style.colorScheme = 'light';
    }
  }

  private saveThemeToStorage(): void {
    if (!this.isBrowser) return;
    localStorage.setItem('theme', this.darkMode() ? 'dark' : 'light');
  }

  private loadThemeFromStorage(): void {
    if (!this.isBrowser) return;

    const storedTheme = localStorage.getItem('theme');
    
    // If user has a preference, use it. Otherwise check system preference.
    if (storedTheme) {
      this.darkMode.set(storedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.darkMode.set(prefersDark);
    }
  }
}