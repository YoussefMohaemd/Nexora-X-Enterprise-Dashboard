import {
  Component,
  inject,
  signal,
  computed,
  ChangeDetectionStrategy,
  TemplateRef,
} from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TuiDialogService, TuiInput } from '@taiga-ui/core';
import { TuiInputNumber, TuiTextarea } from '@taiga-ui/kit';
import { ProductService } from '../../../core/services/product.service';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { UiCardComponent } from '../../../shared/components/ui-card/ui-card.component';
import { ActionButtonComponent } from '../../../shared/components/action-button/action-button.component';
import { UiInputComponent } from '../../../shared/components/ui-input/ui-input.component';
import { UiProgressBarComponent } from '../../../shared/components/ui-progress-bar/ui-progress-bar.component';
import { UiEmptyStateComponent } from '../../../shared/components/ui-empty-state/ui-empty-state.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    TagModule,
    TuiInput,
    TuiInputNumber,
    TuiTextarea,
    PageHeaderComponent,
    UiCardComponent,
    ActionButtonComponent,
    UiInputComponent,
    DialogModule,
    ReactiveFormsModule,
    CurrencyPipe,
    UiProgressBarComponent,
    UiEmptyStateComponent
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  readonly productService = inject(ProductService);
  private readonly dialogs = inject(TuiDialogService);

  searchTerm = signal('');
  isModalOpen = signal(false);

  newProduct = {
    name: '',
    category: '',
    price: null as number | null,
    stock: null as number | null,
    status: 'active',
  };

  filteredProducts = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const products = this.productService.products();
    if (!term) return products;
    return products.filter(
      (p) => p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term),
    );
  });

  showCreateProductDialog(content: TemplateRef<any>) {
    this.dialogs
      .open(content, {
        label: 'Create New Product',
        size: 'l',
        appearance: 'dialog',
      })
      .subscribe();
  }

  saveProduct(observer: any) {
    // In a real app, you would save it via service
    observer.complete();
  }

  getStatusSeverity(status: string) {
    switch (status?.toLowerCase()) {
      case 'active':
      case 'in_stock':
        return 'success';
      case 'out_of_stock':
        return 'danger';
      case 'inactive':
      case 'discontinued':
        return 'warn';
      default:
        return 'info';
    }
  }

  getStockColor(stock: number) {
    if (stock < 10) return '#f43f5e'; // rose-500
    if (stock < 30) return '#f59e0b'; // amber-500
    return '#10b981'; // emerald-500
  }
}
