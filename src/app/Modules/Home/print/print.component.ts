import { Component, OnInit } from '@angular/core';
import { ExecuteService } from '../../../execute.service';

@Component({
  selector: 'app-print',
  standalone: true,
  imports: [],
  templateUrl: './print.component.html',
  styleUrl: './print.component.css'
})
export class PrintComponent implements OnInit{
  transactionDetails: any;
  dateselected: any;

  constructor(private exec: ExecuteService){}

  ngOnInit(): void {
    const date = localStorage.getItem('date');
    this.dateselected = date;
    this.exec.getSalesPrint(date).subscribe((result:any)=>{
      this.transactionDetails = result;
      this.calculateProductTotal();
      console.log(this.transactionDetails);
    })
  }

  calculateProductTotal(): void {
    this.transactionDetails.forEach((sale: any) => {
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

}
