import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui-skeleton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-skeleton.html',
  styleUrl: './ui-skeleton.scss',
})
export class UiSkeletonComponent {
  @Input() width: string = '100%';
  @Input() height: string = '1rem';
  @Input() customClass: string = '';
}
