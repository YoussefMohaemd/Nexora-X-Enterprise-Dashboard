import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent {
  @Input() label: string = '';
  /** Full PrimeIcon class string, e.g. "pi pi-plus". Passed through directly. */
  @Input() icon: string = '';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'destructive' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;
  @Input() customClass: string = '';

  @Output() clicked = new EventEmitter<MouseEvent>();

  /** Maps variant to PrimeNG severity. */
  get severity(): 'primary' | 'secondary' | 'danger' | undefined {
    switch (this.variant) {
      case 'primary':
        return 'primary';
      case 'secondary':
        return 'secondary';
      case 'outline':
      case 'ghost':
        return undefined;
      case 'danger':
      case 'destructive':
        return 'danger';
      default:
        return 'primary';
    }
  }

  /** Maps our size tokens to PrimeNG size strings. */
  get pSize(): 'small' | 'large' | undefined {
    switch (this.size) {
      case 'sm': return 'small';
      case 'lg': return 'large';
      default:   return undefined;
    }
  }

  /** Returns true for text/ghost/outline variants so PrimeNG doesn't apply filled bg. */
  get isText(): boolean {
    return this.variant === 'ghost';
  }

  /** Returns true for outline variant. */
  get isOutlined(): boolean {
    return this.variant === 'outline';
  }
}
