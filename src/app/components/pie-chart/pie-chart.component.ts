import { ChartOptions } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html'
})
export class PieChartComponent  {
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public labels = [
    ['Angular'],['React']
  ];
  public datasets = [
    {
      data: [300, 500]
    },
  ];
  public showLegend = true;

}
