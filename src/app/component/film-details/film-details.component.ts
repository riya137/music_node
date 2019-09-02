import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
//import { Constant } from 'src/app/shared/constant';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  film: any;
  filmID: string;
  films: any;

  constructor(private active: ActivatedRoute, private router: Router,private http:HttpClient) { }


  ngOnInit() {
    this.http.get("http://localhost:3000/film")
    .subscribe(resData=>{
     this.films=resData['data'];
     console.log(this.films);
    });
    this.active.params
      .subscribe(
        (params: Params) => {
          this.filmID = params['filmId'];
          
        }
      )
    
  }
  
  
}
