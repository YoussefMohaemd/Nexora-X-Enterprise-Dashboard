import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-document',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './document.component.html',
  styleUrl: './document.component.scss'
})
export class DocumentComponent {
  sections = [
    { id: 'getting-started', title: 'Getting Started' },
    { id: 'installation', title: 'Installation' },
    { id: 'usage', title: 'Usage' },
    { id: 'components', title: 'Components' }
  ];

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
