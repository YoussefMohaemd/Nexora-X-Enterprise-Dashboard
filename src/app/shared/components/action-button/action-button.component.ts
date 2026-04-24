import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButton } from '@taiga-ui/core';
import { TuiButtonLoading } from '@taiga-ui/kit';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [CommonModule, TuiButton, TuiButtonLoading],
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss'],
})
export class ActionButtonComponent {
  @Input() label: string = '';
  /** Full PrimeIcon class string, e.g. "pi pi-plus". Passed through directly. */
  @Input() icon: string = '';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'destructive' =
    'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;
  @Input() customClass: string = '';

  @Output() clicked = new EventEmitter<MouseEvent>();

  get buttonClass(): string {
    return `btn-${this.variant} hover-scale ${this.customClass ? ' ' + this.customClass : ''}`;
  }

  get tuiSize(): 's' | 'm' | 'l' {
    switch (this.size) {
      case 'sm':
        return 's';
      case 'lg':
        return 'l';
      default:
        return 'm';
    }
  }
}
