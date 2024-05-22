import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../../search.pipe';
import { ExecuteService } from '../../../execute.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tablerelease',
  standalone: true,
  imports: [SearchPipe, FormsModule],
  templateUrl: './tablerelease.component.html',
  styleUrl: './tablerelease.component.css'
})
export class TablereleaseComponent {
  @Output() newItemEvent = new EventEmitter<any>();
  @Input() product: any

  keyword: any;

  constructor(private exec: ExecuteService, private http: HttpClient) { }

  ngOnInit(): void {
    this.exec.getproduct().subscribe((result: any)=>{
      this.product = result;
      console.log(this.product);
    })
  }

  release(p: any){
    this.newItemEvent.emit(p);
    // console.log(p);
  }

}
