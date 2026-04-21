import { Component, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { UserService } from '../../../core/services/user.service';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { UiCardComponent } from '../../../shared/components/ui-card/ui-card.component';
import { ActionButtonComponent } from '../../../shared/components/action-button/action-button.component';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    TagModule,
    InputTextModule,
    PageHeaderComponent,
    UiCardComponent,
    ActionButtonComponent,
  ],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomersComponent {
  readonly userService = inject(UserService);

  // Search state
  searchTerm = signal('');

  // Filtered users signal
  filteredUsers = computed(() => {
    const term = (this.searchTerm() ?? '').toLowerCase();
    const users = this.userService.users() ?? [];

    if (!term) return users;

    return users.filter((user) => {
      return (
        (user.name ?? '').toLowerCase().includes(term) ||
        (user.email ?? '').toLowerCase().includes(term) ||
        (user.metadata?.department ?? '').toLowerCase().includes(term)
      );
    });
  });

  statusSeverities: Record<
    string,
    'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast'
  > = {
    active: 'success',
    inactive: 'danger',
    pending: 'warn', // ✅ بدل warning
  };

  getSeverity(status?: string) {
    const safeStatus = (status ?? '').toLowerCase();

    return this.statusSeverities[safeStatus] || 'info';
  }

  exportCSV() {
    // In a real app, we'd trigger p-table's exportCSV()
    console.log('Exporting CSV...');
  }
}
