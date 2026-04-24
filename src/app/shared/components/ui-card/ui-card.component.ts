import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.scss']
})
export class UiCardComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() customClass: string = '';
  @Input() noPadding: boolean = false;
}
