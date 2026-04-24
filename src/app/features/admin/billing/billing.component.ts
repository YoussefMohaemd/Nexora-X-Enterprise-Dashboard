import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { UiCardComponent } from '../../../shared/components/ui-card/ui-card.component';
import { ActionButtonComponent } from '../../../shared/components/action-button/action-button.component';
import { UiProgressBarComponent } from '../../../shared/components/ui-progress-bar/ui-progress-bar.component';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [
    CommonModule, 
    PageHeaderComponent, 
    UiCardComponent, 
    ActionButtonComponent, 
    TagModule,
    UiProgressBarComponent
  ],
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
})
export class BillingComponent {}
