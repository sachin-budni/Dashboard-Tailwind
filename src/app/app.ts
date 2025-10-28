import { Component } from '@angular/core';
import { HeaderFilters } from './components/header-filters/header-filters';
import { SideBar } from './components/side-bar/side-bar';
import { LucideAngularModule } from 'lucide-angular';
import { Filter } from './components/filter/filter';
import { RouterOutlet } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables, ChartDataLabels);
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    LucideAngularModule,
    HeaderFilters,
    SideBar,
    Filter,
    RouterOutlet,

  ]
})
export class App {
  protected title = 'angular-tailwind';
}
