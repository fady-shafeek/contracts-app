import { Component, OnInit } from '@angular/core';
import { Pie } from '../Classes/Pie';
import { PieChartService } from '../Services/pie-chart.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  constructor(private _pieChart: PieChartService) {}
  lstData: Pie[] = [];

  ngOnInit(): void {
    this._pieChart.getChart().subscribe((res) => {
      this.lstData = res;
      let x = this.lstData.map(function (t) {
        return t.service;
      });
      let y = this.lstData.map(function (t) {
        return t.count;
      });

      





      
    });



    
  }

  
}
