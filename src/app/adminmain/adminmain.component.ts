import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-adminmain',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './adminmain.component.html',
  styleUrl: './adminmain.component.css'
})
export class AdminmainComponent {

  constructor(private route: Router) {}

  toggleAccordion(id: string) {
    const accordionContent = document.getElementById(id);
    if (accordionContent) {
      accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';
    }
  }

  logout() {
    localStorage.removeItem('token');
    Swal.fire({
      title: "Are you sure? You want to Logout.",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logout",
          text: "Successfully logout",
          icon: "success"
        });
        this.route.navigate(['login']);
      }
    });
    // this.route.navigate(['login']);
  }

}
