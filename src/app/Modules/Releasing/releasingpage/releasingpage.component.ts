import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExecuteService } from '../../../execute.service';

@Component({
  selector: 'app-releasingpage',
  standalone: true,
  imports: [RouterModule, HttpClientModule],
  templateUrl: './releasingpage.component.html',
  styleUrl: './releasingpage.component.css'
})
export class ReleasingpageComponent implements OnInit{
  currentDate = new Date();

  release: any;
  total: any;

  constructor(private exec: ExecuteService, private http: HttpClient) { }

  ngOnInit(): void {
    this.exec.getrelease().subscribe((result: any)=>{
      this.release = result.releaseData;
      this.total = result.totalReleasedItems
      console.log(this.release);
    })
  }

}
