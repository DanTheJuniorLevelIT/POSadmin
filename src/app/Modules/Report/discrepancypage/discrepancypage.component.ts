import { Component, OnInit } from '@angular/core';
import { ExecuteService } from '../../../execute.service';

@Component({
  selector: 'app-discrepancypage',
  standalone: true,
  imports: [],
  templateUrl: './discrepancypage.component.html',
  styleUrl: './discrepancypage.component.css'
})
export class DiscrepancypageComponent implements OnInit{

  desc: any;

  constructor(private exec: ExecuteService){}

  ngOnInit(): void {
    this.exec.getDiscrepancyReportData().subscribe((data: any) => {
      this.desc = data; 
    });
  }

}
