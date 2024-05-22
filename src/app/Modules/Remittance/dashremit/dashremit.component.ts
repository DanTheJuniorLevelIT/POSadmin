import { Component, OnInit } from '@angular/core';
import { RemitpageComponent } from '../remitpage/remitpage.component';
import { AddremitComponent } from '../addremit/addremit.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ExecuteService } from '../../../execute.service';

@Component({
  selector: 'app-dashremit',
  standalone: true,
  imports: [RemitpageComponent, AddremitComponent, RouterModule, HttpClientModule,],
  templateUrl: './dashremit.component.html',
  styleUrl: './dashremit.component.css'
})
export class DashremitComponent implements OnInit{

  remitdet = {remid: "", ornumber: "", Date: "", amount: ""};
  remit: any;

  getRemit(r: any){
    this.remitdet = r;
  }

  getRecord(rec: any){
    this.remit = rec;
  }

  constructor(private exec: ExecuteService, private http: HttpClient) { }

  ngOnInit(): void {
    this.exec.getremit().subscribe((result: any)=>{
      this.remit = result;
      console.log(this.remit);
    })
  }

}
