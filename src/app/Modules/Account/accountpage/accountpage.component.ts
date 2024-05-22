import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ExecuteService } from '../../../execute.service';

@Component({
  selector: 'app-accountpage',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './accountpage.component.html',
  styleUrl: './accountpage.component.css'
})
export class AccountpageComponent implements OnInit{
  // userDetails: any = null;
  userDetails: any;

  // acc = new FormGroup({
  //   Name: new FormControl('')
  // })

  constructor(private route: Router, private exec: ExecuteService){}

  ngOnInit(): void {
    const storedDetails = localStorage.getItem('userDetails');
    const ID = localStorage.getItem('token');
    this.exec.Admin(ID).subscribe((details: any)=>{
      this.userDetails = details;
      console.log(this.userDetails);
    })
    // this.userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}'); 
    // if (storedDetails) {
    //   this.userDetails = JSON.parse(storedDetails);
    //   this.acc.patchValue({
    //     Name: this.userDetails.UserID
    //   })
    // } else {
    //   // Handle the case where a user is not logged in (redirect)
    // }
  }
  
  // upName(lastname: string){
  //   this.acc.controls['Name'].setValue(`${lastname}`);
  // }

  editProfile(id:any){
    localStorage.setItem('adminid', id);
    this.route.navigate(['/main/Account/accounthome/edit']);
  }

  upload(id:any){
    localStorage.setItem('adminid', id);
    this.route.navigate(['/main/Account/accounthome/upload']);
  }
}
