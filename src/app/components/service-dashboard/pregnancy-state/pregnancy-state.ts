import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Activity, AlertTriangle, LucideAngularModule, LucideIconData, UserPlus, Users } from 'lucide-angular';

// Interface for structured card data
interface StatCard {
  title: string;
  value: number | string;
  icon: LucideIconData; // Lucide icon name
  iconBgColorClass: string; // Tailwind class for icon background
  iconTextColorClass: string; // Tailwind class for value color (Pink)
  isLargeValue: boolean; // For larger pink value display
}

@Component({
  selector: 'app-pregnancy-state',
  imports: [LucideAngularModule, NgClass],
  templateUrl: './pregnancy-state.html',
  styleUrl: './pregnancy-state.scss',
})
export class PregnancyState {
  statCards: StatCard[] = [];

  ngOnInit(): void {
    this.statCards = [
      {
        title: 'Total Pregnant Women',
        value: 1494,
        icon: Users,
        iconBgColorClass: 'bg-pink-100',
        iconTextColorClass: 'text-pink-600',
        isLargeValue: true
      },
      {
        title: 'Active Pregnant Women',
        value: 1329,
        icon: UserPlus, // Similar to user with a plus sign
        iconBgColorClass: 'bg-pink-100',
        iconTextColorClass: 'text-pink-600',
        isLargeValue: true
      },
      {
        title: 'High-Risk Pregnant Mothers (HRP)',
        value: 52,
        icon: AlertTriangle, // Represents caution/alert
        iconBgColorClass: 'bg-red-100',
        iconTextColorClass: 'text-red-600', // Using red for the icon color
        isLargeValue: false // Value is smaller
      },
      {
        title: 'Total Deliveries - from July 2025',
        value: 68,
        icon: Activity, // Represents activity/pulse/health
        iconBgColorClass: 'bg-red-100', // Using a light red/pink shade
        iconTextColorClass: 'text-pink-600',
        isLargeValue: false // Value is smaller
      }
    ];
  }

  // Helper function to format large numbers with commas
  formatValue(value: number | string): string {
    if (typeof value === 'number') {
      return value.toLocaleString('en-IN');
    }
    return value;
  }
}
