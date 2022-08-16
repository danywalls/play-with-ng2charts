import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
})
export class BarChartComponent {
  public showLegend: boolean = true;

  public data: ChartConfiguration<'bar'>['data'] = {
    labels: ['NPM', 'Github'],
    datasets: [
      { data: [265, 159], label: 'Angular' },
      { data: [128, 148], label: 'React' },
    ],
  };

  public options: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };
}
