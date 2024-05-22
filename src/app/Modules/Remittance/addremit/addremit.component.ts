import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ExecuteService } from '../../../execute.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addremit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './addremit.component.html',
  styleUrl: './addremit.component.css'
})
export class AddremitComponent implements OnInit{

  @Output() newUpdate = new EventEmitter<any>();
  @Input() remitedit: any;
  
  remitForm = new FormGroup({
    remitID: new FormControl(null),
    ornumber: new FormControl(null),
    date: new FormControl(null),
    amount: new FormControl(null),
  })

  constructor(private exec: ExecuteService, private route: Router){}

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: any){
    console.log(changes);
    this.remitForm.controls['remitID'].setValue(changes.remitedit.currentValue.RemittanceID);
    this.remitForm.controls['ornumber'].setValue(changes.remitedit.currentValue.OrNumber);
    this.remitForm.controls['date'].setValue(changes.remitedit.currentValue.Date);
    this.remitForm.controls['amount'].setValue(changes.remitedit.currentValue.Amount);
  }
  
  save(){
    console.log(this.remitForm.value);
    this.exec.saveremit(this.remitForm.value)
      .subscribe((result: any)=>{
        this.remitForm.reset();
        console.log(result);
        if(result == "Success"){
          this.route.navigate(['/main/Remittance/remit/remithome']);
        }
        // this.newUpdate.emit(result);
      })
    // this.remitForm.reset();
    // window.location.reload();
  }

}
