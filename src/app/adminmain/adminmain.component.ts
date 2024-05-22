import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

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
    alert('Logout Successfully!!');
    this.route.navigate(['login']);
  }

}
