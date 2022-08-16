import { ChartOptions, ChartType } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  public options: ChartOptions<'pie'> = {
    responsive: false,
  };
  public labels = [['Angular', 'React'], ['Riot', 'Svelte', 'Vue'], 'Chio'];
  public datasets = [
    {
      data: [300, 500, 100, 20, 22],
    },
  ];
  public legend = true;

  constructor() {}

  ngOnInit() {}
}
