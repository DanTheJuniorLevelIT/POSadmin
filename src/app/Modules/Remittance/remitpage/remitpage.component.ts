import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ExecuteService } from '../../../execute.service';

@Component({
  selector: 'app-remitpage',
  standalone: true,
  imports: [RouterModule, HttpClientModule],
  templateUrl: './remitpage.component.html',
  styleUrl: './remitpage.component.css'
})
export class RemitpageComponent implements OnInit{
  @Output() newItemEvent = new EventEmitter<any>();
  @Input() remit: any

  // product: any;

  constructor(private exec: ExecuteService, private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    // this.exec.getremit().subscribe((result: any)=>{
    //   this.remit = result;
    //   console.log(this.remit);
    // })
  }

  upProd(us: any){
    this.newItemEvent.emit(us);
    // console.log(us);
  }

  editRemit(rid: any){
    localStorage.setItem("remitid", rid);
    this.route.navigate(['/main/Remittance/remit/editremit']);
  }
  

}
