import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { UiCardComponent } from '../../../shared/components/ui-card/ui-card.component';
import { ActionButtonComponent } from '../../../shared/components/action-button/action-button.component';
import { StatCardComponent } from '../../../shared/components/stat-card/stat-card.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    UiCardComponent,
    ActionButtonComponent,
    StatCardComponent,
  ],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent {
  trafficSources = [
    { name: 'Direct Traffic', value: 45, icon: 'pi-globe', color: '#f59e0b' },
    { name: 'Organic Search', value: 25, icon: 'pi-search', color: '#38bdf8' },
    { name: 'Social Media', value: 15, icon: 'pi-share-alt', color: '#a855f7' },
    { name: 'Referral', value: 10, icon: 'pi-link', color: '#10b981' },
    { name: 'Email Marketing', value: 5, icon: 'pi-envelope', color: '#f43f5e' },
  ];

  topCountries = [
    { name: 'United States', flag: '🇺🇸', visitors: '1.2M', percentage: 48, trend: 12.4 },
    { name: 'Germany', flag: '🇩🇪', visitors: '450k', percentage: 18, trend: 5.2 },
    { name: 'United Kingdom', flag: '🇬🇧', visitors: '320k', percentage: 12, trend: 2.1 },
    { name: 'Japan', flag: '🇯🇵', visitors: '210k', percentage: 8, trend: 8.7 },
    { name: 'France', flag: '🇫🇷', visitors: '180k', percentage: 7, trend: 1.5 },
  ];
}
