import { DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ExecuteService } from '../../../execute.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule, HttpClientModule, DatePipe],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{
  sales: any;
  total: any;
  date: Date = new Date();
  // admin: any;

  constructor(private exec: ExecuteService, private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.date = new Date();
    // }, 1000);
    this.exec.getSales().subscribe((result: any)=>{
      this.sales = result.salesData;
      this.total = result.SumPrice
      this.calculateProductTotal();
      console.log(this.sales);
    })
  }
  calculateProductTotal(): void {
    this.sales.forEach((sale: any) => {
      sale.prodtotal = sale.Price * sale.quantity; // Calculate total for each product
    });
  }

  print(day: any){
    localStorage.setItem('date', day);
    this.route.navigate(['main/Home/home/print']);
  }

  // userdetails(udet: any){
  //   this.admin = udet;
  // }
}
