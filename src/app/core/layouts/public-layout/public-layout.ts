import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './public-layout.html',
  styleUrls: ['./public-layout.scss'],
})
export class PublicLayoutComponent {
  readonly themeService = inject(ThemeService);
}
