import { DecimalPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Activity, Baby, Building, Building2, Calendar, CalendarCheck, Dumbbell, Eye, Footprints, Heart, HeartPulse, Hospital, House, LucideAngularModule, LucideIconData, MapPin, PhoneCall, Shield, Smile, User, UserCog, UserPlus, UserRoundCheck, Users, Video } from 'lucide-angular';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
// Interfaces for structured data
export interface CoverageData {
  label: string;
  value: number | string;
  icon: LucideIconData; // Lucide icon name
  colorClass: string; // Tailwind background color class
  iconColor: string; // Tailwind background color class
}

export interface PopulationData {
  label: string;
  value: number | string;
  icon: LucideIconData;
  colorClass: string;
  iconColor: string; // Tailwind background color class
}


// Interface for structured service card data
interface ServiceCardData {
  title: string;
  icon: LucideIconData; // Lucide icon name
  iconBgColorClass: string; // Tailwind class for icon background
  iconTextColorClass: string; // Tailwind class for icon color
  currentWeek: number;
  currentMonth: number;
  total: number;
}

@Component({
  selector: 'app-dashboard-content',
  imports: [LucideAngularModule, NgClass, DecimalPipe, BaseChartDirective],
  templateUrl: './dashboard-content.html',
  styleUrl: './dashboard-content.scss',
})
export class DashboardContent {
  adminCoverage: CoverageData[] = [];
  populationOverview: PopulationData[] = [];
  serviceCards: ServiceCardData[] = [];
  dincServiceCards: ServiceCardData[] = [];
  ngOnInit(): void {
    this.adminCoverage = [
      { label: 'Districts', value: 1, icon: MapPin, colorClass: 'bg-blue-500/10 text-blue-600', iconColor: '#155dfb' },
      { label: 'Mandals', value: 4, icon: Building2, colorClass: 'bg-purple-500/10 text-purple-600', iconColor: '#970ff9' },
      { label: 'DH', value: 0, icon: Hospital, colorClass: 'bg-red-500/10 text-red-600', iconColor: '#e6000a' },
      { label: 'AH', value: 1, icon: Building, colorClass: 'bg-orange-500/10 text-orange-600', iconColor: '#f44900' },
      { label: 'CHC', value: 0, icon: Building2, colorClass: 'bg-teal-500/10 text-teal-600', iconColor: '#009589' },
      { label: 'PHC', value: 13, icon: Building, colorClass: 'bg-green-500/10 text-green-600', iconColor: '#00a53d' },
      { label: 'VHCs', value: 92, icon: House, colorClass: 'bg-yellow-500/10 text-yellow-600', iconColor: '#e17000' },
    ];

    this.populationOverview = [
      { label: 'Total Population', value: '3.20 Lakh', icon: Users, colorClass: 'bg-blue-600/10 text-blue-800', iconColor: '#605eff' },
      { label: 'Citizens Cove', value: '45,56', icon: Heart, colorClass: 'bg-green-600/10 text-green-800', iconColor: '#00bc7c' },
      { label: 'Male', value: '51%', icon: User, colorClass: 'bg-blue-600/10 text-blue-800', iconColor: '#2a7eff' },
      { label: 'Female', value: '45%', icon: Users, colorClass: 'bg-pink-600/10 text-pink-800', iconColor: '#f6339a' },
    ];
    this.serviceCards = [
      {
        title: 'Care in Pregnancy and Childbirth',
        icon: Baby, // Represents pregnancy/time
        iconBgColorClass: '#f13297',
        iconTextColorClass: 'text-pink-600',
        currentWeek: 1012,
        currentMonth: 4398,
        total: 12565
      },
      {
        title: 'Childhood and Adolescent Health',
        icon: Heart, // Represents health/care
        iconBgColorClass: '#ac46ff',
        iconTextColorClass: 'text-purple-600',
        currentWeek: 716,
        currentMonth: 3115,
        total: 8900
      },
      {
        title: "NCD's Management",
        icon: Activity, // Represents health activity/monitoring
        iconBgColorClass: '#fb2b36',
        iconTextColorClass: 'text-red-600',
        currentWeek: 1182,
        currentMonth: 5138,
        total: 14681
      },
      {
        title: 'Communicable diseases Management',
        icon: Shield, // Represents protection/management
        iconBgColorClass: '#ff6900',
        iconTextColorClass: 'text-orange-600',
        currentWeek: 869,
        currentMonth: 3778,
        total: 10793
      },
      {
        title: 'Elderly and Palliative care',
        icon: UserCog, // Represents group care/elderly
        iconBgColorClass: '#495464', // Using gray as a neutral color
        iconTextColorClass: 'text-gray-600',
        currentWeek: 894,
        currentMonth: 3885,
        total: 11100
      },
      {
        title: 'Ophthalmic & ENT',
        icon: Eye, // Represents eye/ENT care
        iconBgColorClass: '#00baa7',
        iconTextColorClass: 'text-teal-600',
        currentWeek: 485,
        currentMonth: 2108,
        total: 6022
      },
      {
        title: 'Oral health',
        icon: Smile, // Represents oral health/smile
        iconBgColorClass: '#00c850',
        iconTextColorClass: 'text-green-600',
        currentWeek: 342,
        currentMonth: 1486,
        total: 4245
      }
    ];
    this.dincServiceCards = [
      {
        title: 'Virtual Follow-up',
        icon: Video, // Represents video calls/virtual
        iconBgColorClass: '#2a7eff',
        iconTextColorClass: 'text-blue-600',
        currentWeek: 1052,
        currentMonth: 4572,
        total: 13064
      },
      {
        title: 'Healthcare Facility Appointments',
        icon: Calendar, // Represents appointments/scheduling
        iconBgColorClass: '#00c850',
        iconTextColorClass: 'text-green-600',
        currentWeek: 252,
        currentMonth: 1096,
        total: 3132
      },
      {
        title: 'Referral Appointments',
        icon: UserRoundCheck, // Represents referral/adding a user
        iconBgColorClass: '#ac46ff',
        iconTextColorClass: 'text-purple-600',
        currentWeek: 18,
        currentMonth: 77,
        total: 219
      },
      {
        title: 'Virtual Consultations with Specialists',
        icon: HeartPulse, // Represents health/specialist care
        iconBgColorClass: '#fb2b36',
        iconTextColorClass: 'text-red-600',
        currentWeek: 20,
        currentMonth: 85,
        total: 243
      },
      {
        title: 'Virtual Consultation with Doctor',
        icon: PhoneCall, // Represents calls/consultations
        iconBgColorClass: '#00baa7',
        iconTextColorClass: 'text-teal-600',
        currentWeek: 104,
        currentMonth: 453,
        total: 1293
      },
      {
        title: 'Yoga For Pregnant Mother',
        icon: Dumbbell, // Represents activity/yoga/pregnancy
        iconBgColorClass: '#f6339a',
        iconTextColorClass: 'text-pink-600',
        currentWeek: 178,
        currentMonth: 776,
        total: 2217
      }
    ];
  }

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['0–10', '11–20', '21–30', '31–40', '41–50', '51–60', '61–70', '71+'],
    datasets: [
      {
        label: 'Male',
        data: [-8500, -9200, -10500, -9800, -8200, -6500, -4200, -2100],
        backgroundColor: '#4e9bff',
        borderRadius: 6,
        barThickness: 20,
      },
      {
        label: 'Female',
        data: [8200, 8800, 10200, 9500, 7900, 6200, 4500, 2700],
        backgroundColor: '#ff5c93',
        borderRadius: 6,
        barThickness: 20,
      }
    ]
  };

  public barChartOptions: ChartOptions<'bar'> = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        min: -11000,
        max: 11000,
        ticks: {
          stepSize: 5500,
          // callback: (value: any) => Math.abs(Number(value)).toLocaleString(),
        },
        grid: {
          color: '#eaeaea',
          // borderDash: [4, 4],
        }
      },
      y: {
        grid: {
          color: '#f4f4f4',
          // borderDash: [4, 4],
          lineWidth: 1,
        }
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          boxWidth: 10,
        }
      },
      tooltip: {
        callbacks: {
          label: (context: any) =>
            `${context.dataset.label}: ${Math.abs(Number(context.raw)).toLocaleString()}`
        }
      },
      datalabels: {
        display: true,
        formatter: (value: any) => Math.abs(value).toLocaleString(),
        anchor: 'end',
        align: 'end',
        color(context): any {
          return context.dataset.backgroundColor;
        },
        font: { weight: 'bold', size: 14}
      }
    }
  };
}
