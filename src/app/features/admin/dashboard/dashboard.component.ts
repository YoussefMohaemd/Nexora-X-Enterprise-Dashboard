import { Component, inject, computed } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { ProductService } from '../../../core/services/product.service';
import { OrderService } from '../../../core/services/order.service';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { StatCardComponent } from '../../../shared/components/stat-card/stat-card.component';
import { UiCardComponent } from '../../../shared/components/ui-card/ui-card.component';
import { ActionButtonComponent } from '../../../shared/components/action-button/action-button.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    PageHeaderComponent,
    StatCardComponent,
    UiCardComponent,
    ActionButtonComponent,
    CurrencyPipe,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  readonly userService = inject(UserService);
  readonly productService = inject(ProductService);
  readonly orderService = inject(OrderService);

  readonly totalRevenue = computed(() => {
    return this.orderService.orders().reduce((acc, order) => acc + (order.total ?? 0), 0);
  });

  // ✅ FIXED: no fake relations anymore
  readonly recentActivity = computed(() => {
    return this.orderService
      .orders()
      .slice()
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 5)
      .map((order) => ({
        id: order.id,
        userName: `User ${order.userId}`, // temporary until API relation exists
        userAvatar: 'https://ui-avatars.com/api/?name=' + order.userId,
        productName: order.items[0]?.productId ?? 'Unknown Product',
        total: order.total,
        createdAt: order.createdAt,
      }));
  });
}
