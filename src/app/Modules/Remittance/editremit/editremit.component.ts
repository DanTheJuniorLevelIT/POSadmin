import { Component, OnInit } from '@angular/core';
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
  rid: any;
  remitdet: any;

  remitForm = new FormGroup({
    remitID: new FormControl(null),
    ornumber: new FormControl(null),
    date: new FormControl(null),
    amount: new FormControl(null),
  })

  constructor(private exec: ExecuteService, private route: Router){}

  ngOnInit(): void {
    this.rid = localStorage.getItem('remitid');
    this.exec.getremitupdate(this.rid).subscribe((remit: any)=>{
      this.remitdet = remit;

      this.remitForm.controls['remitID'].setValue(this.remitdet.RemittanceID);
      this.remitForm.controls['ornumber'].setValue(this.remitdet.OrNumber);
      this.remitForm.controls['date'].setValue(this.remitdet.Date);
      this.remitForm.controls['amount'].setValue(this.remitdet.Amount);
    });
  }

  update(){
    this.exec.updateRemit(this.remitForm.value).subscribe((result:any)=>{
      console.log(result);
      if(result == "Success"){
        this.route.navigate(['/main/Remittance/remit/remithome'])
      }
    })
  }
}
