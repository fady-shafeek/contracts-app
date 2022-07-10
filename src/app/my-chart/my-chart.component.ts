import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Chart,
  ChartConfiguration,
  ChartItem,
  registerables,
} from 'node_modules/chart.js';
import { PieChart } from '../Classes/PieChart';
import { IPieChart } from '../Models/ipie-chart';
import { PieChartService } from '../Services/pie-chart.service';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css'],
})
export class MyChartComponent implements OnInit {
  constructor(private _pieChart: PieChartService) {}

  lstData: PieChart[] = [];

  ngOnInit(): void {
    this._pieChart.getChart().subscribe((res) => {
      this.lstData = res;
      let x = this.lstData.map(function(t){return t.monthName;})
      let y = this.lstData.map(function(t){return t.count;})

      //Chart Code
    Chart.register(...registerables);
    const data = {
      labels: x,
      datasets: [
        {
          label: 'Contracts Count',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: y,
        },
      ],
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
          display: true,
        },
      },
    };

    const config: ChartConfiguration = {
      type: 'line',
      data: data,
      options: options,
    };
    const chartItem: ChartItem = document.getElementById(
      'my-chart'
    ) as ChartItem;

    new Chart(chartItem, config);
  });
  }
}
