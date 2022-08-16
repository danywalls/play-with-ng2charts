import { Injectable } from '@angular/core';

export enum ChartType {
  Pie = 'pie',
  Bar = 'bar',
  Line = 'line',
}

@Injectable({
  providedIn: 'root',
})
export class ChartsService {}
