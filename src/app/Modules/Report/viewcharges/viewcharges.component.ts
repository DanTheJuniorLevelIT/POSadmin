import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ExecuteService } from '../../../execute.service';
import { DaterangePipe } from '../../../daterange.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viewcharges',
  standalone: true,
  imports: [DaterangePipe, FormsModule],
  templateUrl: './viewcharges.component.html',
  styleUrl: './viewcharges.component.css'
})
export class ViewchargesComponent implements OnInit{
  showTransactionsTable = false;
  custid = localStorage.getItem("CustomerID");
  worker: any;
  transaction: any;
  transactionFil: any;
  totalBefore15th: number = 0;
  total15thTo29th: number = 0;
  totalPreviousMonth: number = 0; 
  totalCharges: number = 0; 
  startDate: any;
  endDate: any;

  constructor(private http: HttpClient, private exec: ExecuteService){}

  // ngOnInit(): void {
  //   this.exec.viewCustomer(this.custid).subscribe((result: any)=>{
  //     this.worker = result.customer;
  //     this.transaction = result.transactions;
  //     this.calculateProductTotal();
  //     console.log(this.worker);
  //     console.log(this.transaction);
  //   })
  // }

  ngOnInit(): void {
    this.exec.viewCustomer(this.custid).subscribe((result: any)=>{
      this.worker = result.customer;
      this.transaction = result.transactions;
      this.transactionFil = result.transactionsFilters;

      this.calculateProductTotal();

      this.totalBefore15th = result.totalBefore15th;
      this.total15thTo29th = result.total15thTo29th;
      this.totalPreviousMonth = result.totalPreviousMonth;

      // this.totalCharges = this.transactionFil.reduce((sum: number, t: { Period: string; Price: number; quantity: number; }) => {
      //   if (t.Period && t.Period !== '15th to 29th') { // Filter out transactions before 15th
      //     return sum + (t.Price * t.quantity);
      //   } else {
      //     return sum;
      //   }
      // }, 0);

      console.log(this.worker);
      console.log(this.transaction);
    });
  }

  calculateProductTotal(): void {
    this.transactionFil.forEach((sale: any) => {
      sale.prodtotal = sale.Price * sale.quantity; // Calculate total for each product
    });

    this.transaction.forEach((sale: any) => {
      sale.prodtotal = sale.Price * sale.quantity; // Calculate total for each product
    });
  }

  printCard() {
    const printContentElement = document.getElementById('print-content');
    if (printContentElement) {
      const printContents = printContentElement.innerHTML;
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    } else {
      console.error('Element with ID "print-content" not found.');
    }
  }

  printCard2() {
    const printContentElement = document.getElementById('print-content2');
    if (printContentElement) {
      const printContents = printContentElement.innerHTML;
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    } else {
      console.error('Element with ID "print-content" not found.');
    }
  }

  toggleTransactions() {
    this.showTransactionsTable = !this.showTransactionsTable;
  }

}
