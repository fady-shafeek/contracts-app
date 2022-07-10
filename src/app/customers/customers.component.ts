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

  ngOnInit(): void {
    this._customers.getCustomers().subscribe((res) => {
      this.result = res;
    }); 
  
  
  }







}
