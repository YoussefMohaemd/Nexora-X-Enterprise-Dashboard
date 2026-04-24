import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSkeletonComponent } from '../ui-skeleton/ui-skeleton';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule, UiSkeletonComponent],
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss'],
})
export class StatCardComponent {
  @Input() label: string = '';
  @Input() value: string | number = '';
  @Input() icon: string = '';
  @Input() iconColorClass: string = 'text-primary';
  @Input() iconBgClass: string = 'bg-primary';
  @Input() trend?: string;
  @Input() trendPositive: boolean = true;
  @Input() isLoading: boolean = false;
}
