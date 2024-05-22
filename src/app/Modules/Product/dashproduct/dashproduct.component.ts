import { Component, OnInit } from '@angular/core';
import { EditproductComponent } from '../editproduct/editproduct.component';
import { MainComponent } from '../main/main.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ExecuteService } from '../../../execute.service';

@Component({
  selector: 'app-dashproduct',
  standalone: true,
  imports: [RouterModule, HttpClientModule, MainComponent, EditproductComponent],
  templateUrl: './dashproduct.component.html',
  styleUrl: './dashproduct.component.css'
})
export class DashproductComponent implements OnInit{

  prodt = {imgFile: "", Barcode: "", CatID: "", Prod_name: "", Size: "", Price: ""};
  record: any;

  getProd(p: any){
    this.prodt = p;
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
