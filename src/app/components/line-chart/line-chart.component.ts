
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html'
})
export class LineChartComponent  {
  public data: ChartConfiguration<'line'>['data'] = {
    labels: ['Github', 'Npm', 'Bower','Cdn'],
    datasets: [
      {
        data: [155, 259,145,216],
        label: 'Angular',
        fill: true,
        backgroundColor: 'rgba(255,0,0,0.2)',
      },
      {
        data: [15, 229,136,118],
        label: 'React',
        fill: true,
        backgroundColor: 'rgba(28, 14, 232, 1)',
      },
    ],
  };
  public options: ChartOptions<'line'> = {
    responsive: false,
  };
  public showLegend: boolean = true;

}
