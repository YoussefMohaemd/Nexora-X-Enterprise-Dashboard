import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-progress-bar.component.html',
  styleUrls: ['./ui-progress-bar.component.scss']
})
export class UiProgressBarComponent {
  @Input() value: number = 0;
  @Input() color: string = 'var(--primary)';
  @Input() height: number = 6;
  @Input() showGlow: boolean = false;
  @Input() animate: boolean = true;
}
