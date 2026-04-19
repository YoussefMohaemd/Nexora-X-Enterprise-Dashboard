import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-feature-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './feature-detail.component.html',
})
export class FeatureDetailComponent {
  private route = inject(ActivatedRoute);

  featureId = computed(() => this.route.snapshot.url[0]?.path || 'signals');

  featureData: Record<string, any> = {
    'signals': {
      title: 'Angular Signals',
      description: 'Experience the new reactive primitive in Angular 21 for fine-grained reactivity.',
      icon: 'pi-bolt',
      color: 'text-amber-500',
      demo: 'signal'
    },
    'state-management': {
      title: 'State Management',
      description: 'Centralized and predictable state management using Signals and RxJS.',
      icon: 'pi-database',
      color: 'text-blue-500',
      demo: 'state'
    },
    'ssr': {
      title: 'Sever-Side Rendering',
      description: 'Optimized hydration and lightning-fast initial loads with Angular SSR.',
      icon: 'pi-server',
      color: 'text-green-500',
      demo: 'ssr'
    },
    'performance': {
      title: 'Performance',
      description: 'Tree-shakable architecture and optimized bundle sizes.',
      icon: 'pi-chart-line',
      color: 'text-purple-500',
      demo: 'performance'
    },
    'tables': {
      title: 'Advanced Tables',
      description: 'Feature-rich data tables with filtering, sorting, and pagination.',
      icon: 'pi-table',
      color: 'text-orange-500',
      demo: 'tables'
    },
    'dark-mode': {
      title: 'Dark Mode',
      description: 'Deep navy theme with smooth transitions and system preference sync.',
      icon: 'pi-moon',
      color: 'text-indigo-500',
      demo: 'dark-mode'
    },
    'tailwind': {
      title: 'Tailwind CSS',
      description: 'Modern utility-first styling with custom design tokens.',
      icon: 'pi-palette',
      color: 'text-sky-500',
      demo: 'tailwind'
    },
    'grid': {
      title: 'Responsive Grid',
      description: 'Flexible layout system that works on every screen size.',
      icon: 'pi-th-large',
      color: 'text-pink-500',
      demo: 'grid'
    },
    'security': {
      title: 'Enterprise Security',
      description: 'Role-based access control and secure authentication flows.',
      icon: 'pi-shield',
      color: 'text-red-500',
      demo: 'security'
    }
  };

  currentFeature = computed(() => this.featureData[this.featureId()] || this.featureData['signals']);
}
