import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalService } from 'src/app/shared/local.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  public films:Array<any>;
  filmID: any;
  temp: string;
  constructor(private router:Router,private http:HttpClient,
    private active:ActivatedRoute,
    private local:LocalService) {

   }
  ngOnInit() {
    this.temp = this.local.getEmail();
    this.http.post("http://localhost:3000/viewPlaylist",
    {
      email: this.temp,
    })

    .subscribe(resData=>{
     this.films=resData['data'];
     console.log(this.films);
    });
    this.active.params
      .subscribe()
    
  }
  
  

}
