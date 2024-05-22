import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ExecuteService } from '../../../execute.service';

@Component({
  selector: 'app-chargespage',
  standalone: true,
  imports: [RouterModule, HttpClientModule, FormsModule],
  templateUrl: './chargespage.component.html',
  styleUrl: './chargespage.component.css'
})
export class ChargespageComponent implements OnInit{
  customer: any;

  constructor(private exec: ExecuteService, private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.exec.getcust().subscribe((result: any)=>{
      this.customer = result;
      console.log(this.customer);
    })
  }

  viewCust(cid: any){
    localStorage.setItem("CustomerID", cid);
    this.route.navigate(['/main/Report/reporthome/view']);
  }

  editCust(cid: any){
    localStorage.setItem("CustomerID", cid);
    this.route.navigate(['/main/Balance/balancehome/edit']);
  }

}
