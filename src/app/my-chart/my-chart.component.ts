import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Chart,
  ChartConfiguration,
  ChartItem,
  registerables,
} from 'node_modules/chart.js';
import { PieChartService } from '../Services/pie-chart.service';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css'],
})
export class MyChartComponent implements OnInit {
  constructor(private postSrv:PieChartService) {}

  ngOnInit(): void {

    this.createChart();
    this.postSrv.getChart().subscribe()
  }

  createChart(): void {
    Chart.register(...registerables);
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [10, 5, 2, 20, 30, 45],
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
        options: options
      }
      const chartItem: ChartItem = document.getElementById('my-chart') as ChartItem

      new Chart(chartItem, config)



  }
}
