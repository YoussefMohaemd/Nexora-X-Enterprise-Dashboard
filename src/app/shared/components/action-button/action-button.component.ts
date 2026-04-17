import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss'],
})
export class ActionButtonComponent {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'destructive' =
    'primary';
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;
  @Input() customClass: string = '';

  @Output() clicked = new EventEmitter<MouseEvent>();

  get variantClass(): string {
    switch (this.variant) {
      case 'primary':
        return 'btn-primary';
      case 'secondary':
        return 'btn-secondary';
      case 'outline':
        return 'border border-border hover:border-primary text-text px-4 py-2 rounded-xl';
      case 'ghost':
        return 'hover:bg-white/5 text-muted hover:text-white px-3 py-2 rounded-xl';
      case 'danger':
        return 'bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-xl';
      case 'destructive':
        return 'bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl'; // ✅
      default:
        return 'btn-primary';
    }
  }
}
