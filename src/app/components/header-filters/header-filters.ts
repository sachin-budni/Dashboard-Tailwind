import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChevronRight, Funnel, LucideAngularModule, PanelLeft } from 'lucide-angular';

@Component({
  selector: 'app-header-filters',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './header-filters.html',
  styleUrl: './header-filters.scss',
})
export class HeaderFilters {
  readonly PanelLeftIcon = PanelLeft;
  readonly chevronRight = ChevronRight;
  readonly funnelIcon = Funnel;
  breadcrumbs = [
    { label: 'Digital Nerve Centre Kuppam', link: '/digital-nerve-centre-kuppam', isActive: false },
    { label: 'Overview', link: '/digital-nerve-centre-kuppam/overview', isActive: true }
  ];
}
