import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiInput } from '@taiga-ui/core/components/input';

@Component({
  selector: 'app-ui-input',
  standalone: true,
  imports: [CommonModule, TuiInput],
  templateUrl: './ui-input.component.html',
  styleUrl: './ui-input.component.scss',
})
export class UiInputComponent {
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() name = '';
  @Input() placeholder = '';
  @Input() value = '';
  @Input() required = false;
  @Input() autocomplete = '';
  @Input() icon = '';
  @Input() endIcon = '';
  @Input() wrapperClass = '';
  @Input() inputClass = '';
  @Input() inputMode = '';
  @Input() ariaLabel = '';

  @Output() valueChange = new EventEmitter<string>();
  @Output() endIconClick = new EventEmitter<void>();

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;

    this.valueChange.emit(target.value);
  }
}
