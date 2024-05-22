import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExecuteService } from '../../../execute.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newcustomer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './newcustomer.component.html',
  styleUrl: './newcustomer.component.css'
})
export class NewcustomerComponent {

  showDiv: boolean = false;

  customerForm = new FormGroup({
    email: new FormControl(null),
    pass: new FormControl(null),
    lname: new FormControl(null),
    fname: new FormControl(null),
    mname: new FormControl(null),
    bdate: new FormControl(null),
    contact: new FormControl(null),
    address: new FormControl(null),
    credit: new FormControl(500, [Validators.required, Validators.min(500), Validators.max(1000)])
  })

  constructor(private exec: ExecuteService, private route: Router) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  save(){
    if(this.customerForm.valid){
      console.log(this.customerForm.value);
      this.exec.savenewcustomer(this.customerForm.value)
        .subscribe((result:any)=>{
          console.log(result)
          if(result == 'Success'){
            this.route.navigate(['/main/Balance/balancehome/balancepage'])
          }
        })
    } else {
      this.showDiv = !this.showDiv;
    }
  }
}
