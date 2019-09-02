import { Component, OnInit } from '@angular/core';
import { AddFilmService } from './add-film.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {

  signupForm: FormGroup;
  error: any;
  errorMessage: any;
  film: string;
  isLoading: boolean;
  film_image: File;
  selectedFile = null;
  data: string;
  resData: string;

  constructor(private AddFilmService: AddFilmService, private router: Router, private http: HttpClient) { }
  ngOnInit() {
    this.signupForm = new FormGroup({
      // 'username':new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.maxLength(20),Validators.minLength(6)]),
      'id': new FormControl(null, [Validators.required]),
      'film_name': new FormControl(null, [Validators.required]),
      'songId': new FormControl(null,[Validators.required]),
      'song_name': new FormControl(null,[Validators.required]),
      'film_image':new FormControl(null,[Validators.required])
    })

  }
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }
  
  onSubmit() {
    const Dataload = new FormData();
    const name:string=this.signupForm.value.name;
    console.log(name);
    Dataload.append('name',name);
    Dataload.append('film_image', this.film_image, this.film_image.name);
    
    this.http
      .post(`http://localhost:3000/add`,
        Dataload
      ).subscribe((data: any) => {
        this.resData = JSON.stringify(data);
        console.log(this.resData);
      });
  }
}
