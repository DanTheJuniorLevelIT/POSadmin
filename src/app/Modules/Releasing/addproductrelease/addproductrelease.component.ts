import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ExecuteService } from '../../../execute.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproductrelease',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './addproductrelease.component.html',
  styleUrl: './addproductrelease.component.css'
})
export class AddproductreleaseComponent implements OnInit{

  // release: any;
  @Output() newUpdateEvent = new EventEmitter<any>();
  @Input() release: any;

  addrelease = new FormGroup({
    code: new FormControl(null),
    prodname: new FormControl(null),
    quantity: new FormControl(null),
    releasedate: new FormControl(null),
    desc: new FormControl(null)
  })

  constructor(private exec: ExecuteService, private route: Router){}

  ngOnInit(): void {
  }

  ngOnChanges(changes: any){
    console.log(changes);
    this.addrelease.controls['code'].setValue(changes.release.currentValue.Barcode);
    this.addrelease.controls['prodname'].setValue(changes.release.currentValue.Prod_name);
    this.addrelease.controls['desc'].setValue(changes.release.currentValue.Description);
  }

  addToRelease(){
    console.log(this.addrelease.value);
    this.exec.addToReleaseProduct(this.addrelease.value)
      .subscribe((result:any)=>{
        console.log(result)
        this.newUpdateEvent.emit(result);
        this.addrelease.reset();
        if(result){
          this.route.navigate(['/main/Releasing/releasehome/releasepage'])
        }
      })
  }
}
