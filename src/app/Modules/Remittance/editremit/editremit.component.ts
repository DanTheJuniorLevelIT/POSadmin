import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ExecuteService } from '../../../execute.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editremit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editremit.component.html',
  styleUrl: './editremit.component.css'
})
export class EditremitComponent implements OnInit{
  @Output() newUpdateEvent = new EventEmitter<any>();
  @Input() remitdet: any;
  rid: any;
  transactionDetails: any;
  totalsSales: any;
  // remitdet: any;

  remitForm = new FormGroup({
    remitID: new FormControl(null),
    ornumber: new FormControl(null),
    date: new FormControl(null),
    amount: new FormControl(null),
  })

  constructor(private exec: ExecuteService, private route: Router){}

  ngOnInit(): void {
    // this.rid = localStorage.getItem('remitid');
    // this.exec.getremitupdate(this.rid).subscribe((remit: any)=>{
    //   this.remitdet = remit;

    //   this.remitForm.controls['remitID'].setValue(this.remitdet.RemittanceID);
    //   this.remitForm.controls['ornumber'].setValue(this.remitdet.OrNumber);
    //   this.remitForm.controls['date'].setValue(this.remitdet.Date);
    //   this.remitForm.controls['amount'].setValue(this.remitdet.Amount);
    // });
    // this.getdailyTransactionDetails();
    this.exec.getremitcash().subscribe(
      (response: any) => {
        console.log('Response:', response); // Log the response
        if (response.transactionDetails) {
          // Parse and store transaction details
          this.transactionDetails = response.transactionDetails;
          // Calculate total sales
          this.totalsSales = response.totalSales;
          this.remitForm.controls['amount'].setValue(response.totalSales);
        } else {
          console.error('Error: No transaction details found'); // Log the error
        }
      },
      (error) => {
        console.error('Error fetching daily transaction details:', error); // Log the error
      }
    );
  }

  getdailyTransactionDetails() {
    const transactionId = 1;
    this.exec.getremitcash().subscribe(
      (response: any) => {
        console.log('Response:', response); // Log the response
        if (response.transactionDetails) {
          // Parse and store transaction details
          this.transactionDetails = response.transactionDetails;
          // Calculate total sales
          this.totalsSales = response.totalSales;
        } else {
          console.error('Error: No transaction details found'); // Log the error
        }
      },
      (error) => {
        console.error('Error fetching daily transaction details:', error); // Log the error
      }
    );
  }


  ngOnChanges(changes: any){
    console.log(changes);
    this.remitForm.controls['remitID'].setValue(changes.remitdet.currentValue.RemittanceID);
    this.remitForm.controls['ornumber'].setValue(changes.remitdet.currentValue.OrNumber);
    this.remitForm.controls['date'].setValue(changes.remitdet.currentValue.Date);
    this.remitForm.controls['amount'].setValue(changes.remitdet.currentValue.Amount);
  }

  update(){
    this.exec.updateRemit(this.remitForm.value).subscribe((result:any)=>{
      console.log(result);
      this.newUpdateEvent.emit(result);
      this.remitForm.reset();
      // if(result == "Success"){
      //   this.route.navigate(['/main/Remittance/remit/remithome'])
      // }
    })
  }
}
