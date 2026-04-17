// src/app/features/admin/projects/projects.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { UiCardComponent } from '../../../shared/components/ui-card/ui-card.component';
import { ActionButtonComponent } from '../../../shared/components/action-button/action-button.component';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    UiCardComponent,
    ActionButtonComponent,
    TagModule,
    TableModule
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  // ✅ FIX: add projects array
  projects = [
    {
      name: 'Dashboard System',
      description: 'Admin dashboard with analytics',
      team: ['A', 'B', 'C'],
      progress: 75,
      deadline: new Date(),
      status: 'Active'
    },
    {
      name: 'E-commerce Platform',
      description: 'Online store with payment integration',
      team: ['D', 'E'],
      progress: 45,
      deadline: new Date(),
      status: 'Pending'
    },
    {
      name: 'Mobile App',
      description: 'Cross-platform mobile application',
      team: ['F', 'G', 'H', 'I'],
      progress: 90,
      deadline: new Date(),
      status: 'Active'
    }
  ];

  // 👇 ده optional لو هتستخدم kanban
  kanbanCols = [
    {
      name: 'To Do',
      tasks: [
        {
          title: 'Global Theme Refactor',
          desc: 'Unify Tailwind and PrimeNG components',
          tag: 'Design',
          avatars: ['https://ui-avatars.com/api/?name=A'],
          attachments: 4,
          comments: 2,
        }
      ],
    }
  ];

  getTagSeverity(tag: string) {
    switch (tag) {
      case 'Design':
        return 'info';
      case 'UI':
        return 'success';
      case 'Frontend':
        return 'contrast';
      case 'QA':
        return 'warn';
      case 'DevOps':
        return 'secondary';
      default:
        return 'info';
    }
  }
}