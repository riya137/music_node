import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  signupForm: FormGroup;
  imgFile:File= null;
   ngOnInit(){
     this.signupForm=new FormGroup({
       'name':new FormControl(null),
       'image':new FormControl(null)
     })
   }


  image: File;
  resData: any;
  selectedFile = null;
  

  constructor(private http: HttpClient) {}

  onFileSelected(event) {
    this.imgFile = event.target.files[0];
    console.log(this.imgFile.name);
  }

  onSubmit() {
    const Dataload = new FormData();
    const name:string=this.signupForm.value.name;
    console.log(name);
    Dataload.append('name',name);
    Dataload.append('image', this.imgFile, this.imgFile.name);
    
    this.http
      .post(`http://localhost:3000/add`,
        Dataload 
      ).subscribe((data: any) => {
        this.resData = JSON.stringify(data);
        console.log(this.resData);
      });
  }
}
