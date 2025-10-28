import { AfterViewInit, Component, Input, ViewChildren } from '@angular/core';
import { LucideAngularModule, Stethoscope } from 'lucide-angular';
import { BaseChartDirective } from 'ng2-charts';
import { ChartCards } from '../pregnancy-childbirth/pregnancy-childbirth';

@Component({
  selector: 'app-card-chart',
  imports: [LucideAngularModule, BaseChartDirective],
  templateUrl: './card-chart.html',
  styleUrl: './card-chart.scss',
})
export class CardChart implements AfterViewInit {
  readonly stethoscope = Stethoscope;
  @Input() tab!: ChartCards;
  @ViewChildren(BaseChartDirective) charts!: BaseChartDirective[];
  ngAfterViewInit(): void {
    console.log(this.charts);
    this.charts.forEach(chart => {
      chart.chart?.ctx.setLineDash([5, 5]);
      // .setLineDash([5, 5]);
      chart.update();
    });
  }
  
}
