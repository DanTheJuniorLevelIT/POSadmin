import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExecuteService } from '../../../execute.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent implements OnInit{
  constructor(
    private exec: ExecuteService,
    private route: Router,
    private http: HttpClient
  ){}

  PictureForm = new FormGroup({});
  selectedFile: any;
  filename: any;
  profile: any;
  uploading: any;
  barc: any;
  uid: any;
  images: any;
  prodnum: any;
  
  ngOnInit(): void {
    this.uid = localStorage.getItem("adminid");
  }

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
    this.filename = this.selectedFile.name;
  }

  onPost(){
    const fd = new FormData();
    if(this.filename != null){
      console.log(this.selectedFile);
      fd.append('files',this.selectedFile);
      fd.append('uid',this.uid);
      // console.log(fd);
      // console.log(this.bid);
      fd.forEach((value,key)=>{
        console.log(key + " " + JSON.stringify(value))
      });

      this.http.post('http://localhost/nlahPOS/saveprofilepic.php', fd, {observe: 'events', reportProgress: true}).subscribe((event: any)=>{
        console.log(event);
        if(event){
          this.route.navigate(['/main/Account/accounthome/accountpage']);
        }
      })
    }
  }

}
