import { ChartOptions } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [
    ['Angular', 'React'],
    ['Riot', 'Svelte', 'Vue'],
    'Chio',
  ];
  public pieChartDatasets = [
    {
      data: [300, 500, 100, 20, 22],
    },
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {}

  ngOnInit() {}
}
