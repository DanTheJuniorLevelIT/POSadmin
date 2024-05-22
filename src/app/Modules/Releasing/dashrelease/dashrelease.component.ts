import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../../search.pipe';
import { AddproductreleaseComponent } from '../addproductrelease/addproductrelease.component';
import { TablereleaseComponent } from '../tablerelease/tablerelease.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ExecuteService } from '../../../execute.service';

@Component({
  selector: 'app-dashrelease',
  standalone: true,
  imports: [RouterModule, HttpClientModule, TablereleaseComponent, AddproductreleaseComponent, SearchPipe, FormsModule],
  templateUrl: './dashrelease.component.html',
  styleUrl: './dashrelease.component.css'
})
export class DashreleaseComponent {
  relItem = {Barcode: "",Prod_name:"", Quantity:""};
  record: any;
  total: any;
  // originalRecord: any;
  keyword: any;

  getRelease(u: any) {
    this.relItem=u;
  }

  getRecord(rec: any){
    this.record = rec;
  }

  constructor(private exec: ExecuteService, private http: HttpClient) { }

  ngOnInit(): void {
    this.exec.getproduct().subscribe((result: any)=>{
      this.record = result;
      console.log(this.record);
    })
  }

}
