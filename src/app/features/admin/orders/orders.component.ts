import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';

import { OrderService } from '../../../core/services/order.service';
import { OrderStatus } from '../../../core/enums/order-status.enum';

import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { UiCardComponent } from '../../../shared/components/ui-card/ui-card.component';
import { ActionButtonComponent } from '../../../shared/components/action-button/action-button.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    TagModule,
    InputTextModule,
    PageHeaderComponent,
    UiCardComponent,
    ActionButtonComponent,
    CurrencyPipe,
    DatePipe,
  ],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  readonly orderService = inject(OrderService);

  searchTerm = signal('');

  filteredOrders = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const orders = this.orderService.orders() ?? [];

    if (!term) return orders;

    return orders.filter(o =>
      String(o.id).toLowerCase().includes(term) ||
      o.status?.toLowerCase().includes(term) ||
      o.product?.name?.toLowerCase().includes(term)
    );
  });

  getStatusSeverity(status?: string) {
    switch ((status ?? '').toLowerCase()) {
      case OrderStatus.DELIVERED:
        return 'success';
      case OrderStatus.SHIPPED:
        return 'info';
      case OrderStatus.CONFIRMED:
        return 'info';
      case OrderStatus.PENDING:
        return 'warn';
      case OrderStatus.CANCELLED:
        return 'danger';
      default:
        return 'info';
    }
  }
}