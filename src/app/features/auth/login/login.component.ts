import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  email = '';
  password = '';
  isLoading = signal(false);
  showPassword = signal(false);

  togglePassword() {
    this.showPassword.update((v) => !v);
  }

  handleLogin() {
    if (!this.email || !this.password) return;

    this.isLoading.set(true);

    // Simulate network delay
    setTimeout(() => {
      const success = this.authService.login(this.email, this.password);
      this.isLoading.set(false);

      if (success) {
        this.router.navigate(['/admin/dashboard']);
      }
    }, 1200);
  }
}
