import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ActionButtonComponent } from '../../../shared/components/action-button/action-button.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ActionButtonComponent],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  isLoading = signal(false);
  emailSent = signal(false);

  sendResetLink() {
    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
      this.emailSent.set(true);
    }, 1500);
  }
}
