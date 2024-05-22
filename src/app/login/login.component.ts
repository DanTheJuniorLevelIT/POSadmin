import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from '../Modules/Home/homepage/homepage.component';
import { Router } from '@angular/router';
import { ExecuteService } from '../execute.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HomepageComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  logdata: any;

  loginform = new FormGroup({
    email: new FormControl(null),
    pass: new FormControl(null),
  })
  HomepageComponent: any;

  constructor(private exec: ExecuteService, private route: Router) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  submit(){
    this.exec.checklogin(this.loginform.value).subscribe((result: any)=>{
      this.logdata = result;
      console.log(this.logdata)
      if(result && result.UserID){
        localStorage.setItem('userDetails', JSON.stringify(result));
        localStorage.setItem('token', result.UserID);
        // this.HomepageComponent.userdetails(this.logdata);
        this.route.navigate(['main']);
      }else{
        this.loginform.reset();
      }
    })
  }

}
