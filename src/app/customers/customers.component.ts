import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../Services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  constructor(private _customers: CustomersService) {}

  result: any;
  page = 1;
  pageSize = 5;
  collectionSize :number =1000;

  ngOnInit(): void {
    this._customers.getCustomers().subscribe((res) => {
      this.result = res;
      this.collectionSize = res.length;
    }); 
    this.refreshCountries();
  }


  refreshCountries() {
    // this.countries = COUNTRIES.map((country, i) => ({id: i + 1, ...country})).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }






}
