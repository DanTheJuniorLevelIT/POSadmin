import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ExecuteService } from '../../../execute.service';

@Component({
  selector: 'app-newproduct',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './newproduct.component.html',
  styleUrl: './newproduct.component.css'
})
export class NewproductComponent {
  
  productform = new FormGroup({
    code: new FormControl(null),
    category: new FormControl(null),
    prodname: new FormControl(null),
    brand: new FormControl(null),
    size: new FormControl(null),
    price: new FormControl(null),
    desc: new FormControl(null)
  })

  constructor(private exec: ExecuteService, private route: Router) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  save(){
    console.log(this.productform.value);
    this.exec.savenewproduct(this.productform.value)
      .subscribe((result:any)=>{
        console.log(result)
        if(result == 'Success'){
          this.route.navigate(['/main/Product/productpage/dash'])
        }
      })
  }
}
