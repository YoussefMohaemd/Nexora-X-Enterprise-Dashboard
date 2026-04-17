import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export interface UserSession {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly SESSION_KEY = 'nx_session';
  private readonly platformId = inject(PLATFORM_ID);

  private _session = signal<UserSession | null>(null);

  readonly session = computed(() => this._session());
  readonly isAuthenticated = computed(() => !!this._session());
  readonly currentUser = computed(() => this._session());

  constructor(private router: Router) {
    this.loadSession();
  }

  private loadSession() {
    if (!isPlatformBrowser(this.platformId)) return;

    const stored = localStorage.getItem(this.SESSION_KEY);
    if (stored) {
      this._session.set(JSON.parse(stored));
    }
  }

  login(email: string, password: string): boolean {
    if (email && password) {
      const mockUser: UserSession = {
        id: '1',
        name: 'Ym099 User',
        email,
        role: 'admin',
        token: 'mock-jwt-' + Math.random().toString(36).substring(7)
      };

      this._session.set(mockUser);

      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem(this.SESSION_KEY, JSON.stringify(mockUser));
      }

      return true;
    }

    return false;
  }

  logout() {
    this._session.set(null);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.SESSION_KEY);
    }

    this.router.navigate(['/auth/login']);
  }
}