import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ExecuteService } from '../../../execute.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editcustomer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editcustomer.component.html',
  styleUrl: './editcustomer.component.css'
})
export class EditcustomerComponent implements OnInit{

  cid: any;
  customerdet: any;

  customerForm = new FormGroup({
    custid: new FormControl(null),
    lname: new FormControl(null),
    fname: new FormControl(null),
    mname: new FormControl(null),
    bdate: new FormControl(null),
    contact: new FormControl(null),
    address: new FormControl(null),
    // credit: new FormControl(500, [Validators.required, Validators.min(500), Validators.max(1000)]),
    credit: new FormControl(null)
  })

  constructor(private exec: ExecuteService, private route: Router){}
  
  ngOnInit(): void {
    this.cid = localStorage.getItem('CustomerID');
    this.exec.getCustomer(this.cid).subscribe((customer: any)=>{
      this.customerdet = customer;

      this.customerForm.controls['lname'].setValue(this.customerdet.Lastname);
      this.customerForm.controls['fname'].setValue(this.customerdet.Firstname);
      this.customerForm.controls['mname'].setValue(this.customerdet.Middlename);
      this.customerForm.controls['bdate'].setValue(this.customerdet.Birthdate);
      this.customerForm.controls['contact'].setValue(this.customerdet.Contact);
      this.customerForm.controls['address'].setValue(this.customerdet.Address);
      this.customerForm.controls['credit'].setValue(this.customerdet.Credit);
      this.customerForm.controls['custid'].setValue(this.customerdet.CustID);
    });
  }

  update(){
    this.exec.updateCustomer(this.customerForm.value).subscribe((result: any)=>{
      console.log(result);
      if(result == "Success"){
        this.route.navigate(['main/Balance/balancehome/balancepage']);
      }else{
        this.customerForm.reset();
      }
    })
  }

}
