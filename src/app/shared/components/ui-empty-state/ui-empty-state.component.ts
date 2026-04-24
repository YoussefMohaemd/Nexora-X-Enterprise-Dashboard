import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionButtonComponent } from '../action-button/action-button.component';

@Component({
  selector: 'app-ui-empty-state',
  standalone: true,
  imports: [CommonModule, ActionButtonComponent],
  templateUrl: './ui-empty-state.component.html',
  styleUrls: ['./ui-empty-state.component.scss']
})
export class UiEmptyStateComponent {
  @Input() icon: string = 'pi-inbox';
  @Input() title: string = 'No data found';
  @Input() description: string = 'There is no data to display at the moment.';
  @Input() actionLabel: string = '';
  
  @Output() actionClicked = new EventEmitter<void>();
}
