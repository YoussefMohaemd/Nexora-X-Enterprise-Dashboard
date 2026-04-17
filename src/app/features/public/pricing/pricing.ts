import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ActionButtonComponent } from '../../../shared/components/action-button/action-button.component';
import { PageHeaderComponent } from "../../../shared/components/page-header/page-header.component";
import { Tag } from "primeng/tag";

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, ActionButtonComponent, PageHeaderComponent, Tag],
  templateUrl: './pricing.html',
  styleUrls: ['./pricing.scss'],
})
export class PricingComponent {
  billingCycle = signal<'monthly' | 'annual'>('monthly');

  plans = [
    {
      name: 'Starter',
      desc: 'Perfect for small side projects.',
      monthlyPrice: 29,
      annualPrice: 24,
      features: ['Up to 5 Projects', '10GB Storage', 'Basic Analytics', 'Community Support'],
      excluded: ['Custom Branding', 'Advanced Security', 'Team Collaboration'],
      cta: 'Get Started',
      featured: false,
    },
    {
      name: 'Pro',
      desc: 'The best for growing SaaS teams.',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        'Unlimited Projects',
        '100GB Storage',
        'Advanced Analytics',
        'Priority Support',
        'Team Collaboration',
        'Custom Branding',
      ],
      excluded: ['Dedicated Account Manager'],
      cta: 'Choose Pro',
      featured: true,
    },
    {
      name: 'Enterprise',
      desc: 'Custom solutions for large orgs.',
      monthlyPrice: 399,
      annualPrice: 319,
      features: [
        'Everything in Pro',
        'Unlimited Storage',
        'Premium Audit Logs',
        'SSO & SAML Auth',
        'Custom Contracts',
        'Dedicated Account Manager',
      ],
      excluded: [],
      cta: 'Contact Sales',
      featured: false,
    },
  ];
}
