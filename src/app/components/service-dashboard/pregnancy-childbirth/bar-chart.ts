import { ChartConfiguration, ChartOptions } from 'chart.js';

const barChartType: any = 'bar';

// Data extracted approximately from the image's bar lengths
export const barChartData: ChartConfiguration['data'] = {
    labels: [
        'ANC Checkup',
        'High Risk ANC Checkup',
        'Yoga Session',
        'Delivery',
        'PNC Checkup',
        'Other'
    ],
    datasets: [
        {
            data: [3150, 1150, 950, 200, 900, 750], // Approximate values
            label: 'Service Count',
            backgroundColor: getGradientColors(), // Function to apply gradient
            borderColor: 'rgba(0,0,0,0)', // Hide borders
            barThickness: 45, // Adjust bar height
        }
    ]
};

// Configuration for the horizontal bar chart and gradient effect
export const barChartOptions: ChartOptions = {
    responsive: true,
    indexAxis: 'y', // Makes the chart horizontal
    elements: {
        bar: {
            borderWidth: 0,
            borderRadius: 10, // Optional: for rounded bar ends
        }
    },
    scales: {
        x: {
            grid: {
                display: true,
                drawOnChartArea: true,
                drawTicks: true,
                // color: 'rgba(0, 0, 0, 0.1)',
                tickBorderDash: [5, 5],
                lineWidth: 1,
            },
            ticks: {
                callback: (value: any) => value,
                font: { weight: 'bold' },
                stepSize: 800
            },
            min: 0,
            max: 3200, // Matches the scale in the image
        },
        y: {
            barPercentage: 1.0,      
            categoryPercentage: 1.0,
            grid: {
                display: true, // Hide vertical grid lines
                lineWidth: 1,
            },
            ticks: {
                font: { size: 14 }
            }
        } as any
    },
    plugins: {
        legend: {
            display: false // Hide the dataset legend
        },
        tooltip: {
            backgroundColor: '#333',
            titleFont: { size: 14 },
            bodyFont: { size: 14 }
        }
    }
};

// Function to create a linear gradient canvas context for the bar colors
function getGradientColors(): (context: any) => string {
    return (context: any) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
            return 'rgba(100, 100, 255, 0.7)'; // Default fallback color
        }

        // Create a linear gradient from left (blue) to right (light green/yellow)
        const gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
        gradient.addColorStop(0, '#5D99DD');   // Starting Blue (approx)
        gradient.addColorStop(1, '#98D65D');   // Ending Light Green (approx)

        return gradient;
    };
}