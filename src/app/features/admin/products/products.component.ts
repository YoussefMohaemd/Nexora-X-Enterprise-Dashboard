import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { ProductService } from '../../../core/services/product.service';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { UiCardComponent } from '../../../shared/components/ui-card/ui-card.component';
import { ActionButtonComponent } from '../../../shared/components/action-button/action-button.component';

@Component({
  selector: 'app-products',
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
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  readonly productService = inject(ProductService);

  searchTerm = signal('');

  filteredProducts = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const products = this.productService.products();
    if (!term) return products;
    return products.filter(
      (p) => p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term),
    );
  });

  getStatusSeverity(status: string) {
    switch (status) {
      case 'in_stock':
        return 'success';
      case 'out_of_stock':
        return 'danger';
case 'discontinued':
        return 'warn';
      default:
        return 'info';
    }
  }

  getStockColor(stock: number) {
    if (stock < 10) return 'bg-rose-500';
    if (stock < 30) return 'bg-amber-500';
    return 'bg-emerald-500';
  }
}
