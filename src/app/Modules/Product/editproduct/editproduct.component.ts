import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExecuteService } from '../../../execute.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editproduct',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.css'
})
export class EditproductComponent implements OnInit{
  @Output() newUpdateEvent = new EventEmitter<any>();
  @Input() product: any;

  barid: any;
  // product: any;

  editproductform = new FormGroup({
    code: new FormControl(null),
    code2: new FormControl(null, Validators.required),
    category: new FormControl(null),
    prodname: new FormControl(null),
    brand: new FormControl(null),
    size: new FormControl(null),
    price: new FormControl(null),
    desc: new FormControl(null)
  })

  constructor(private exec: ExecuteService, private ar: ActivatedRoute, private route: Router){}

  ngOnInit(): void {
    // this.ar.paramMap.subscribe(params =>{
    //   this.barid = params.get('bid');
    // })

    // this.exec.getBarcode(this.barid).subscribe((result: any)=>{
    //   this.product = result;

    //   this.editproductform.controls['code'].setValue(this.product.Barcode);
    //   this.editproductform.controls['category'].setValue(this.product.CatID);
    //   this.editproductform.controls['prodname'].setValue(this.product.Prod_name);
    //   this.editproductform.controls['brand'].setValue(this.product.Brand);
    //   this.editproductform.controls['size'].setValue(this.product.Size);
    //   this.editproductform.controls['price'].setValue(this.product.Price);
    // })
  }

  ngOnChanges(changes: any){
    console.log(changes);
    this.editproductform.controls['code'].setValue(changes.product.currentValue.Barcode);
    this.editproductform.controls['code2'].setValue(changes.product.currentValue.Barcode);
    this.editproductform.controls['category'].setValue(changes.product.currentValue.CatID);
    this.editproductform.controls['prodname'].setValue(changes.product.currentValue.Prod_name);
    this.editproductform.controls['brand'].setValue(changes.product.currentValue.Brand);
    this.editproductform.controls['size'].setValue(changes.product.currentValue.Size);
    this.editproductform.controls['price'].setValue(changes.product.currentValue.Price);
    this.editproductform.controls['desc'].setValue(changes.product.currentValue.Description);
  }

  update(){
    console.log(this.editproductform.value);
    if(this.editproductform.valid){
      // this.exec.updateProduct(this.editproductform.value)
      //   .subscribe((result:any)=>{
      //     // this.newUpdateEvent.emit(result);
      //     // this.editproductform.reset();
      //     // console.log(result)
      //     if(result){
      //       this.newUpdateEvent.emit(result);
      //       this.editproductform.reset();
      //     }else if(result == "Error"){
      //       Swal.fire({
      //         icon: "error",
      //         title: "Oops...",
      //         text: "Barcode Already Exist",
      //       });
      //     }
      //   })
      this.exec.updateProduct(this.editproductform.value)
    .subscribe({
      next: (result: any) => {
        if (result === "Error: Barcode already exists!") { // Specific error
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Barcode Already Exist",
          });
        } else {
            this.newUpdateEvent.emit(result);
            this.editproductform.reset();
        }
      }
    });
    }else{
      Swal.fire({
          icon: "error",
          title: "Barcode is Empty",
          text: "Please Enter Designated Barcode to the product",
      });
    }
  }

  // if(result){
  //   this.newUpdateEvent.emit(result);
  //   this.editproductform.reset();
  // }else if(result == "Error"){
  //   Swal.fire({
  //     icon: "error",
  //     title: "Oops...",
  //     text: "Barcode Already Exist",
  //   });
  // }

  clear(){
    this.editproductform.reset();
  }

}
