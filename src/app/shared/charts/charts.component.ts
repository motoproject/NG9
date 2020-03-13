import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  @Input() chartDetails: any;

  chartOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.mapChartDetails();
  }

  mapChartDetails() {
    this.chartOptions = this.chartDetails;
    Highcharts.chart('container', this.chartOptions);
  }

}
