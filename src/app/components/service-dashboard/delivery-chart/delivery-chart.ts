import { Component } from '@angular/core';
import { ChevronRight, LucideAngularModule } from 'lucide-angular';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { pieChartOptions } from './pie.chart';

interface PieChartData {
  label: string;
  value: number;
  colorClass: string; // Tailwind background color for the legend/slice
  percentage?: number; // Optional percentage for Deliveries/Delivery Mode
}

interface ChartComponentData {
  title: string;
  data: any;
  config: ChartOptions<'pie'>; // Sum of all values, used to calculate percentages
}

@Component({
  selector: 'app-delivery-chart',
  imports: [LucideAngularModule,BaseChartDirective],
  templateUrl: './delivery-chart.html',
  styleUrl: './delivery-chart.scss',
})
export class DeliveryChart {
  pieChartData: any = {
    labels: ['Anaemia', 'Hypertension', 'Diabetes', 'Previous LSCS', 'Others'],
    datasets: [
      {
        data: [17, 12, 8, 7, 6],
        backgroundColor: [
          '#ffc0cb',
          '#ffb347',
          '#d1aaff',
          '#ff6961',
          '#ff914d',
        ],
        borderColor: '#ffffff', // ✅ white gap between slices
        borderWidth: 1
      },
    ],
  };
  pieChartData2: any = {
    labels: ['Public', 'Private'],
    datasets: [
      {
        data: [20, 50],
        backgroundColor: [
          '#70ac46',
          '#4472c3',
        ],
        borderColor: '#ffffff', // ✅ white gap between slices
        borderWidth: 1
      },
    ],
  };
  pieChartData3: any = {
    labels: ['Normal', 'LSCS'],
    datasets: [
      {
        data: [48, 25],
        backgroundColor: [
          '#00a7b5',
          '#e66e50',
        ],
        borderColor: '#ffffff', // ✅ white gap between slices
        borderWidth: 1
      },
    ],
  };
  charts: ChartComponentData[] = [
    { title: 'High-Risk Pregnancy Groups', data: this.pieChartData, config: pieChartOptions },
    { title: 'Deliveries: Public vs Private', data: this.pieChartData2, config: pieChartOptions },
    { title: 'Delivery Mode: Normal vs LSCS', data: this.pieChartData3, config: pieChartOptions },
  ];
  readonly chevronRight = ChevronRight;

  ngOnInit(): void {
    // --- 1. High-Risk Pregnancy Groups ---
    const highRiskData: PieChartData[] = [
      { label: 'Anaemia', value: 17, colorClass: 'bg-pink-300' },
      { label: 'Hypertension', value: 12, colorClass: 'bg-orange-400' },
      { label: 'Diabetes', value: 8, colorClass: 'bg-purple-300' },
      { label: 'Previous LSCS', value: 7, colorClass: 'bg-red-400' },
      { label: 'Others', value: 6, colorClass: 'bg-orange-500' },
    ];
    const highRiskTotal = highRiskData.reduce((sum, item) => sum + item.value, 0);

    // --- 2. Deliveries: Public vs Private ---
    const deliveryPlaceData: PieChartData[] = [
      { label: 'Public', value: 19, percentage: 30, colorClass: 'bg-green-600' },
      { label: 'Private', value: 46, percentage: 70, colorClass: 'bg-blue-600' },
    ];
    const deliveryPlaceTotal = deliveryPlaceData.reduce((sum, item) => sum + item.value, 0);

    // --- 3. Delivery Mode: Normal vs LSCS ---
    const deliveryModeData: PieChartData[] = [
      { label: 'Normal', value: 41, percentage: 63, colorClass: 'bg-teal-500' },
      { label: 'LSCS', value: 25, percentage: 37, colorClass: 'bg-red-500' },
    ];
    const deliveryModeTotal = deliveryModeData.reduce((sum, item) => sum + item.value, 0);

    // this.charts = [
    //   { title: 'High-Risk Pregnancy Groups', data: highRiskData, totalValue: highRiskTotal },
    //   { title: 'Deliveries: Public vs Private', data: deliveryPlaceData, totalValue: deliveryPlaceTotal },
    //   { title: 'Delivery Mode: Normal vs LSCS', data: deliveryModeData, totalValue: deliveryModeTotal },
    // ];
  }

  // Helper function to format the legend text
  getLegendText(item: PieChartData): string {
    if (item.percentage !== undefined) {
      return `${item.label}: ${item.value} (${item.percentage}%)`;
    }
    return `${item.label}: ${item.value}`;
  }

  // Method to generate the CSS conic-gradient string for the simulated pie chart
  getConicGradient(data: PieChartData[], total: number): string {
    if (total === 0) return 'none';

    let gradientString = 'conic-gradient(';
    let startAngle = 0;

    data.forEach((item, index) => {
      const percentage = (item.value / total) * 100;
      const endAngle = startAngle + percentage;

      // Map Tailwind class to a simple hex color (Need to manually map colors)
      // This is a rough approximation based on the image's colors:
      const colorMap: { [key: string]: string } = {
        'bg-pink-300': '#fbcfe8',
        'bg-orange-400': '#fb923c',
        'bg-purple-300': '#d8b4fe',
        'bg-red-400': '#f87171',
        'bg-orange-500': '#f97316',

        'bg-green-600': '#16a34a',
        'bg-blue-600': '#2563eb',

        'bg-teal-500': '#14b8a6',
        'bg-red-500': '#ef4444',
      };

      const color = colorMap[item.colorClass] || '#cccccc';

      // Add the color stop
      gradientString += `${color} ${startAngle}% ${endAngle}%`;

      // Add a comma if it's not the last item
      if (index < data.length - 1) {
        gradientString += ', ';
      }

      startAngle = endAngle;
    });

    gradientString += ')';
    return gradientString;
  }
}
