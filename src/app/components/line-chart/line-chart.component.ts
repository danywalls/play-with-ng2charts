import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit {
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Angular',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.5)',
      },
      {
        data: [5, 19, 20, 21, 36, 15, 30],
        label: 'React',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(28, 14, 232, 1)',
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
  };
  public lineChartLegend = true;

  constructor() {}

  ngOnInit() {}
}
