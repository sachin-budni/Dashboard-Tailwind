import { ChartConfiguration, ChartOptions } from 'chart.js';
export const participantsChartData: ChartConfiguration['data'] = {
    labels: [
        'Gudupalle PHC',
        'Kangundi PHC',
        'Mallanur PHC',
        'N Kothapalle PHC',
        'PHC Paipalem',
        'PHC Veernamala',
        'PHC Vijalapuram',
        'Rallabuduguru PHC',
        'Ramakuppam PHC',
        'Santhipuram PHC',
        'UPHC Kamathamur',
        'UPHC-Kuppam -3',
    ],
    datasets: [
        {
            data: [140, 120, 115, 100, 95, 90, 85, 70, 60, 50, 40, 30],
            backgroundColor: 'rgba(34, 197, 94, 0.8)', // green
            borderRadius: 10,
            barThickness: 24,
        },
    ],
};

export const participantsChartOptions: ChartOptions = {
    responsive: true,
    indexAxis: 'y', // horizontal chart
    plugins: {
        legend: { display: false },
        tooltip: { enabled: true },
    },
    scales: {
        x: {
            beginAtZero: true,
            grid: { color: '#e5e7eb' },
            ticks: { color: '#6b7280' },
        },
        y: {
            grid: { display: false },
            ticks: {
                color: '#6b7280',
                font: { size: 13 },
            },
        },
    },
};



  export const proActiveChartData: ChartConfiguration['data'] = {
    labels: [
        'Virtual Counselling',
        'Hospital Appointment',
        'High-Risk Tracking',
        'General',
        'Post-Delivery Follow-up',
        'Information Services'
    ],
    datasets: [
        {
            data: [2266, 1755, 1137, 965, 542, 390],
            label: 'Number of Services',
            backgroundColor: getBarColors(), // Function to apply specific colors
            borderColor: 'transparent',
            hoverBackgroundColor: getBarHoverColors(), // Optional: for hover effect
            barThickness: 45, // Adjust bar width
            borderRadius: 8, // Rounded top corners for bars
        }
    ]
};

  export const proActiveChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'x', // Vertical bar chart
    scales: {
        x: {
            grid: {
                display: false,
            } as any,
            ticks: {
                font: { size: 12 },
                color: '#555',
                maxRotation: 45, // Rotate labels for better readability
                minRotation: 45,
            } as any
        },
        y: {
            grid: {
                display: false,
            } as any,
            ticks: {
                stepSize: 600, // Matches intervals in the image (0, 600, 1200, 1800, 2400)
                font: { weight: 'bold', size: 12 },
                color: '#555'
            },
            min: 0,
            max: 2400, // Max value on Y-axis
            title: {
                display: true,
                text: 'Number of Services',
                color: '#555',
                font: { size: 14, weight: 'bold' }
            }
        }
    },
    plugins: {
        legend: {
            display: false // Hide the dataset legend
        },
        tooltip: {
            backgroundColor: '#333',
            titleFont: { size: 14 },
            bodyFont: { size: 14 },
            callbacks: {
                label: function (context) {
                    let label = context.dataset.label || '';
                    if (label) {
                        label += ': ';
                    }
                    if (context.parsed.y !== null) {
                        label += new Intl.NumberFormat('en-US').format(context.parsed.y);
                    }
                    return label;
                }
            }
        },
        datalabels: { // This plugin is not built-in, needs separate installation and import if used
            anchor: 'end',
            align: 'top',
            formatter: (value: any) => new Intl.NumberFormat('en-US').format(value),
            font: {
                weight: 'bold',
                size: 14,
            },
            color: '#333',
            offset: 4
        }
    }
};

  // Function to provide specific colors for each bar
  function getBarColors(): string[] {
    return [
        '#FFD700',
        '#6BA84A',
        '#4169E1',
        '#F4A460',
        '#808080',
        '#FFB6C1' 
    ];
}

  // Optional: for hover background colors
  function getBarHoverColors(): string[] {
    return [
        '#FFEB3B',
        '#8BC34A',
        '#6495ED',
        '#FFCC80',
        '#A9A9A9',
        '#FFDDE3' 
    ];
}