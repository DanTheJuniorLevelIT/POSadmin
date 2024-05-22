import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ExecuteService } from '../../../execute.service';

@Component({
  selector: 'app-viewcustomer',
  standalone: true,
  imports: [],
  templateUrl: './viewcustomer.component.html',
  styleUrl: './viewcustomer.component.css'
})
export class ViewcustomerComponent implements OnInit{
  
  custid = localStorage.getItem("CustomerID");
  worker: any;
  transaction: any;

  constructor(private http: HttpClient, private exec: ExecuteService){}

  ngOnInit(): void {
    this.exec.viewCustomer(this.custid).subscribe((result: any)=>{
      this.worker = result.customer;
      this.transaction = result.transactions;
      this.calculateProductTotal();
      console.log(this.worker);
      console.log(this.transaction);
    })
  }

  calculateProductTotal(): void {
    this.transaction.forEach((sale: any) => {
      sale.prodtotal = sale.Price * sale.quantity; // Calculate total for each product
    });
  }

}
