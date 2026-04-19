import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pricing.html',
})
export class PricingComponent {
  billingCycle = signal<'monthly' | 'annual'>('monthly');

  toggleBilling() {
    this.billingCycle.update(cycle => cycle === 'monthly' ? 'annual' : 'monthly');
  }

  plans = [
    {
      name: 'Basic',
      desc: 'Essential features for individuals and small teams.',
      monthlyPrice: 19,
      annualPrice: 15,
      features: ['Up to 3 Projects', '5GB Cloud Storage', 'Standard Analytics', 'Email Support', 'Basic Components'],
      cta: 'Start with Basic',
      featured: false,
    },
    {
      name: 'Pro',
      desc: 'Advanced tools for professional developers and startups.',
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        'Everything in Basic',
        'Unlimited Projects',
        '25GB Cloud Storage',
        'Advanced Heatmaps',
        'Priority 24/7 Support',
        'Custom Branding',
        'Team Collaboration'
      ],
      cta: 'Get Started with Pro',
      featured: true,
      badge: 'Most Popular'
    },
    {
      name: 'Enterprise',
      desc: 'Scalable solutions for large organizations.',
      monthlyPrice: 199,
      annualPrice: 159,
      features: [
        'Everything in Pro',
        'Dedicated Infrastructure',
        'Custom User Roles',
        'Audit Logs & Compliance',
        'SAML / SSO Auth',
        'Dedicated Account Manager',
        'Custom Components'
      ],
      cta: 'Contact Sales',
      featured: false,
    },
  ];
}
