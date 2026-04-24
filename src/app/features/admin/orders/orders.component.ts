import {
  Component,
  inject,
  signal,
  computed,
  ChangeDetectionStrategy,
  TemplateRef,
} from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TuiDialogService, TuiInput } from '@taiga-ui/core';
import { TuiInputNumber } from '@taiga-ui/kit';

import { OrderService } from '../../../core/services/order.service';
import { OrderStatus } from '../../../core/enums/order-status.enum';

import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { UiCardComponent } from '../../../shared/components/ui-card/ui-card.component';
import { ActionButtonComponent } from '../../../shared/components/action-button/action-button.component';
import { UiInputComponent } from '../../../shared/components/ui-input/ui-input.component';
import { UiEmptyStateComponent } from '../../../shared/components/ui-empty-state/ui-empty-state.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    TagModule,
    InputTextModule,
    TuiInput,
    TuiInputNumber,
    PageHeaderComponent,
    UiCardComponent,
    ActionButtonComponent,
    DialogModule,
    ReactiveFormsModule,
    CurrencyPipe,
    DatePipe,
    UiInputComponent,
    UiEmptyStateComponent
  ],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent {
  readonly orderService = inject(OrderService);
  private readonly dialogs = inject(TuiDialogService);

  searchTerm = signal('');
  isModalOpen = signal(false);

  newOrder = {
    customerName: '',
    productName: '',
    amount: null as number | null,
    status: OrderStatus.PENDING,
  };

  filteredOrders = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const orders = this.orderService.orders() ?? [];

    if (!term) return orders;

    return orders.filter(
      (o) =>
        String(o.id).toLowerCase().includes(term) ||
        o.status?.toLowerCase().includes(term) ||
        o.product?.name?.toLowerCase().includes(term),
    );
  });

  showCreateOrderDialog(content: TemplateRef<any>) {
    this.dialogs
      .open(content, {
        label: 'Create New Order',
        size: 'l',
        appearance: 'dialog',
      })
      .subscribe();
  }

  saveOrder(observer: any) {
    observer.complete();
  }

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
