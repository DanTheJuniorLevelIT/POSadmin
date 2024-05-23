import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from '../Modules/Home/homepage/homepage.component';
import { Router } from '@angular/router';
import { ExecuteService } from '../execute.service';
import Swal from 'sweetalert2'

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
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully"
        });
        this.route.navigate(['main']);
      }else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid Email or Password",
        });
        this.loginform.reset();
      }
    })
  }

}
