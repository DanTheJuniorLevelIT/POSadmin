import { Component, OnInit } from '@angular/core';
import { RemitpageComponent } from '../remitpage/remitpage.component';
import { AddremitComponent } from '../addremit/addremit.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ExecuteService } from '../../../execute.service';
import { EditremitComponent } from '../editremit/editremit.component';

@Component({
  selector: 'app-dashremit',
  standalone: true,
  imports: [RemitpageComponent, AddremitComponent, RouterModule, HttpClientModule, EditremitComponent],
  templateUrl: './dashremit.component.html',
  styleUrl: './dashremit.component.css'
})
export class DashremitComponent implements OnInit{
  
  remittance = {RemittanceID: "", OrNumber: "", Date: "", Amount: ""};
  remit: any;

  getProd(r: any){
    this.remittance = r;
  }

  getRecord(rec: any){
    this.remit = rec;
  }

  constructor(private exec: ExecuteService) { }

  ngOnInit(): void {
    this.exec.getremit().subscribe((result: any)=>{
      this.remit = result;
      console.log(this.remit);
    })
  }

}
