import { Injectable } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

export enum ChartType {
  Pie = 'pie',
  Bar = 'bar',
  Line = 'line',
}

@Injectable({
  providedIn: 'root',
})
export class ChartsService {}

export class ChartJSConfig {
  public options?: ChartOptions;
  public config?: ChartConfiguration;
}

export class ChartConfigClient {
  private chartConfig?: ChartJSConfig;
}

export class ChartExample {
  labels: Array<string> = [];
  dataset?: [Array<string>, string];

  constructor() {}
}
