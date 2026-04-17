import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-bg py-24 px-4 md:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-24">
          <p class="text-xs font-bold text-primary uppercase tracking-[0.3em] mb-4">Features</p>
          <h2 class="text-4xl md:text-6xl font-black text-white mb-6">Built for scale.</h2>
          <p class="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Every component is crafted with performance and user experience in mind. 
            From developer tools to end-user analytics.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div *ngFor="let feature of features" class="group">
            <div [class]="'w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-xl transition-transform group-hover:scale-110 ' + feature.bg">
              <i [class]="'pi ' + feature.icon + ' text-2xl ' + feature.color"></i>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">{{ feature.title }}</h3>
            <p class="text-muted text-sm leading-relaxed mb-6">{{ feature.desc }}</p>
            <a href="#" class="text-xs font-bold text-white flex items-center gap-2 group-hover:text-primary transition-colors uppercase tracking-wider">
              Learn more <i class="pi pi-arrow-right text-[10px]"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Detail Highlight -->
      <section class="max-w-7xl mx-auto mt-48 py-24 bg-card/20 rounded-[40px] border border-white/5 relative overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-8 md:px-16 relative z-10">
          <div>
            <div class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-8">
               <i class="pi pi-bolt text-bg text-xl"></i>
            </div>
            <h2 class="text-4xl font-bold text-white mb-6">Real-time collaboration across your entire team.</h2>
            <p class="text-muted mb-8 leading-relaxed">
              Our shared state system using Angular Signals ensures that every member of your team is seeing the most up-to-date data without any lag or refreshing.
            </p>
            <ul class="space-y-4 mb-10">
               <li class="flex items-center gap-3 text-sm text-white font-medium">
                  <i class="pi pi-check-circle text-primary"></i> Live document editing
               </li>
               <li class="flex items-center gap-3 text-sm text-white font-medium">
                  <i class="pi pi-check-circle text-primary"></i> Presence indicators
               </li>
               <li class="flex items-center gap-3 text-sm text-white font-medium">
                  <i class="pi pi-check-circle text-primary"></i> Instant notifications
               </li>
            </ul>
            <a routerLink="/auth/register" class="btn-primary py-4 px-8 text-sm inline-block">Start Free Trial</a>
          </div>
          <div class="relative">
             <div class="aspect-square bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-3xl absolute -inset-4 opacity-20"></div>
             <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80" class="rounded-3xl border border-white/10 shadow-2xl relative z-10">
          </div>
        </div>
      </section>
    </div>
  `
})
export class FeaturesComponent {
  features = [
    { title: 'Signal State', desc: 'Reactive state management out of the box with the latest Angular 21 features.', icon: 'pi-bolt', color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { title: 'SSR Powered', desc: 'Server-side rendering for lightning fast first contentful paint and perfect SEO.', icon: 'pi-server', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { title: 'Enterprise Tables', desc: 'Full-featured data tables with pagination, sorting, filtering and export.', icon: 'pi-table', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { title: 'Dark Mode First', desc: 'A stunning premium dark aesthetic designed to reduce eye strain and look elite.', icon: 'pi-moon', color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { title: 'Tailwind Grid', desc: 'Ultra-flexible layout system that adapts perfectly to any screen size.', icon: 'pi-th-large', color: 'text-sky-500', bg: 'bg-sky-500/10' },
    { title: 'Secure by Design', desc: 'JWT-ready auth patterns and route guards to protect your business data.', icon: 'pi-shield', color: 'text-rose-500', bg: 'bg-rose-500/10' }
  ];
}
