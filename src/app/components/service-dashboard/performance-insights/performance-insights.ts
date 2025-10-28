import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Calendar, ChartColumn, ClipboardCheck, Clock4, FileCheck, LucideAngularModule, LucideIconData, Shield } from 'lucide-angular';

export interface PerformanceInsightsCard {
  title: string;
  value: string;
  icon: LucideIconData;
  color: string;
  iconBgColor: string;
}

@Component({
  selector: 'app-performance-insights',
  imports: [LucideAngularModule, NgStyle],
  templateUrl: './performance-insights.html',
  styleUrl: './performance-insights.scss',
})
export class PerformanceInsights {
  cards: PerformanceInsightsCard[] = [
    {
      title: 'First ANC Visit % (1st Trimester)',
      value: '78%',
      icon: Calendar,
      color: '#4472c3',
      iconBgColor: '#e8edf7',
    },
    {
      title: 'TT/Td Coverage %',
      value: '92%',
      icon: Shield,
      color: '#70ac46',
      iconBgColor: '#edf4e8',
    },
    {
      title: 'ANC Completion ≥ 4 Visits',
      value: '85%',
      icon: ClipboardCheck,
      color: '#ffbf00',
      iconBgColor: '#fff7e0',
    },
    {
      title: 'Maternal Death Review % Closed',
      value: '95%',
      icon: FileCheck,
      color: '#e66e50',
      iconBgColor: '#fff7e0',
    },
    {
      title: 'Average ANC Visits per Pregnant Woman',
      value: '5.2',
      icon: ChartColumn,
      color: '#9c26af',
      iconBgColor: '#f2e4f5',
    },
    {
      title: 'Postpartum Care within 48 Hours %',
      value: '88%',
      icon: Clock4,
      color: '#00a7b5',
      iconBgColor: '#e0f4f6',
    },
  ];
}
