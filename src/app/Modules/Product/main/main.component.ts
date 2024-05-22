import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ExecuteService } from '../../../execute.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, HttpClientModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  @Output() newItemEvent = new EventEmitter<any>();
  @Input() product: any

  // product: any;

  constructor(private exec: ExecuteService, private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    
  }

  upProd(us: any){
    this.newItemEvent.emit(us);
    // console.log(us);
  }

  upload(bid: any, pname: any){
    localStorage.setItem("code", bid);
    localStorage.setItem("name", pname);
    this.route.navigate(["/main/Product/productpage/upIMG"]);
  }

  deleteProd(barcode: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.exec.deleteProduct(barcode).subscribe(
          (res: any) => {
            // Handle successful deletion (e.g., update the product list)
            Swal.fire(
              'Deleted!',
              'The product has been deleted.',
              'success'
            );
            // ... 
          },
          (err: any) => {
            console.error('Error deleting product:', err);
            Swal.fire(
              'Error!',
              'There was an error deleting the product.',
              'error'
            );
          }
        );
      }
    });
  }
  

}
