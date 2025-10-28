import { Component } from '@angular/core';
import { Funnel, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-filter',
  imports: [LucideAngularModule],
  templateUrl: './filter.html',
  styleUrl: './filter.scss',
})
export class Filter {
  readonly funnelIcon = Funnel;
}
