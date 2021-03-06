import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MyChartComponent } from './my-chart/my-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { PieChartService } from './Services/pie-chart.service';
import { CustomersComponent } from './customers/customers.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    MyChartComponent,
    CustomersComponent,
    PieChartComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule, 
    NgbAlertModule,
    NgbModule,
    HttpClientModule,
    NgChartsModule,
    
    

    
  ],
  providers: [PieChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
