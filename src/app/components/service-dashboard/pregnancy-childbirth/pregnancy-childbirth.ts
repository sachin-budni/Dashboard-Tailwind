import { Component } from '@angular/core';
import { Baby, Dumbbell, Heart, LucideAngularModule, LucideIconData, Phone, Stethoscope } from 'lucide-angular';
import { PregnancyState } from '../pregnancy-state/pregnancy-state';
import { DeliveryChart } from '../delivery-chart/delivery-chart';
import { CardChart } from '../card-chart/card-chart';
import { PerformanceInsights } from '../performance-insights/performance-insights';
import { barChartData, barChartOptions } from './bar-chart';
import { ChartConfiguration } from 'chart.js';
import { participantsChartData, participantsChartOptions, proActiveChartData, proActiveChartOptions } from './chart';

export interface ChartCards {
  title: string;
  subtitle: string;
  value: string | number;
  icon: LucideIconData,
  iconColor: string;
  chart: {
    title: string;
    typeChart?: string;
    data?: ChartConfiguration['data'];
    options?: ChartConfiguration['options'];
  }
}

@Component({
  selector: 'app-pregnancy-childbirth',
  imports: [LucideAngularModule, PregnancyState, DeliveryChart, CardChart, PerformanceInsights],
  templateUrl: './pregnancy-childbirth.html',
  styleUrl: './pregnancy-childbirth.scss',
})
export class PregnancyChildbirth {
  readonly babyIcon = Baby;

  readonly tabs: ChartCards[] = [
    {
      title: 'Total Number of Reproductive Services at Health Facility',
      subtitle: 'Total Services Delivered',
      value: '6,886',
      icon: Stethoscope,
      iconColor: '#ff6e60',
      chart: {
        title: 'Services Availed at Health Facility',
        typeChart: 'bar',
        data: barChartData,
        options: barChartOptions
      }
    },
    {
      title: 'Yoga for Pregnant Mothers',
      subtitle: 'Total Participants',
      value: '851',
      icon: Dumbbell,
      iconColor: '#66ba69',
      chart: {
        title: 'Participants by PHC',
        typeChart: 'bar',
        data: participantsChartData,
        options: participantsChartOptions
      }
    },
    {
      title: 'PMSMA Mothers Catered',
      subtitle: 'Total PMSMA Attended',
      value: '1,223',
      icon: Heart,
      iconColor: '#e56e50',
      chart: {
        title: 'Mothers attended PMSMA session',
        typeChart: 'bar',
        data: participantsChartData,
        options: participantsChartOptions
      }
    },
    {
      title: 'Proactive Virtual Care (Digital Nerve Centre)',
      subtitle: 'Total Virtual Care Services',
      value: '6,902',
      icon: Phone,
      iconColor: '#ffbf00',
      chart: {
        title: 'Services Availed under Proactive Virtual Care',
        typeChart: 'bar',
        data: proActiveChartData,
        options: proActiveChartOptions
      }
    }
  ];
}
