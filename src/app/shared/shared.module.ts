import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartComponent } from 'highcharts-angular';
import { ChartsComponent } from './charts/charts.component';



@NgModule({
  declarations: [
    HighchartsChartComponent,
    ChartsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChartsComponent,
  ]
})
export class SharedModule { }
