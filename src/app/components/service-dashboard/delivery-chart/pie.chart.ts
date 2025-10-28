import { ChartOptions } from 'chart.js';

export const pieChartType: any = 'pie';
export const pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 40, // ✅ add equal padding on all sides (px)
      // or individually:
      // padding: { top: 20, right: 30, bottom: 20, left: 30 }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: { enabled: true },
      datalabels: { display: true, color: '#fff', font: { weight: 'bold', size: 18 } }
    },
  };