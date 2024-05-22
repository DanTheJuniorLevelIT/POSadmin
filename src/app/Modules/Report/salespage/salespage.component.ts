import { Component, OnInit } from '@angular/core';
import { ExecuteService } from '../../../execute.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-salespage',
  standalone: true,
  imports: [],
  templateUrl: './salespage.component.html',
  styleUrl: './salespage.component.css'
})
export class SalespageComponent implements OnInit{
  retrep: any;
  salesreport: any;

  constructor(private exec: ExecuteService, private http: HttpClient) { }
  
  ngOnInit(): void {
    this.exec.getRetRepData().subscribe((data: any)=>{
      this.retrep = data;
      console.log(this.retrep);
    })

    this.exec.getSalesReportData().subscribe((data: any) => {
      this.salesreport = data; 
    });
  }

}
