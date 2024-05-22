import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ExecuteService } from '../../../execute.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editaccount',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editaccount.component.html',
  styleUrl: './editaccount.component.css'
})
export class EditaccountComponent implements OnInit{
  aid: any;
  admindet: any

  adminForm = new FormGroup({
    id: new FormControl(null),
    bdate: new FormControl(null),
    contact: new FormControl(null),
    address: new FormControl(null),
    role: new FormControl(null),
    oldpassword: new FormControl(null),
    newpassword: new FormControl(null)
  })

  constructor(private exec: ExecuteService, private route: Router){}

  ngOnInit(): void {
    this.aid = localStorage.getItem('adminid')
    this.exec.getAdmin(this.aid).subscribe((admin: any)=>{
      this.admindet = admin;

      this.adminForm.controls['id'].setValue(this.admindet.UserID);
      this.adminForm.controls['bdate'].setValue(this.admindet.Birthdate);
      this.adminForm.controls['contact'].setValue(this.admindet.Contact);
      this.adminForm.controls['address'].setValue(this.admindet.Address);
      // this.adminForm.controls['contact'].setValue(this.admindet.Contact);
      // this.adminForm.controls['address'].setValue(this.admindet.Address);
      // this.adminForm.controls['credit'].setValue(this.admindet.Credit);
      // this.adminForm.controls['custid'].setValue(this.admindet.CustID);
    });
  }

  update(){
    this.exec.updateAdmin(this.adminForm.value).subscribe((result: any)=>{
      console.log(result);
      if(result == "Success"){
        this.route.navigate(['main/Account/accounthome/accountpage']);
      }else{
        this.adminForm.reset();
      }
    })
  }
}
