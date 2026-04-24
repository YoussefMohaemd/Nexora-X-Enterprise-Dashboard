import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SegmentOption {
  label: string;
  value: any;
  icon?: string;
}

@Component({
  selector: 'app-segmented-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './segmented-control.component.html',
  styleUrls: ['./segmented-control.component.scss']
})
export class SegmentedControlComponent {
  @Input() options: SegmentOption[] = [];
  @Input() selectedValue: any;
  @Input() size: 'sm' | 'md' = 'sm';
  
  @Output() selectionChange = new EventEmitter<any>();

  select(option: SegmentOption) {
    this.selectedValue = option.value;
    this.selectionChange.emit(option.value);
  }
}
