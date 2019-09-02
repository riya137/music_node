import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  film_id:string;
  searchText="";
  public films:Array<any>;
  filmID: any;
  constructor(private router:Router,private http:HttpClient,private active:ActivatedRoute) {

   }

  ngOnInit() {
    this.http.get("http://localhost:3000/film")
    .subscribe(resData=>{
     this.films=resData['data'];
     console.log(this.films);
    });
    this.active.params
      .subscribe()
    
  }
  
  
  
   
 
}
