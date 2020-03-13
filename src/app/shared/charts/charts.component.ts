import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  @Input() chartDetails: any;

  highcharts: any;
  chartOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.mapChartDetails();
  }

  mapChartDetails() {
    this.highcharts = Highcharts;
    this.chartOptions = this.chartDetails;
  }

}
