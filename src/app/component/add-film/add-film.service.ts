import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AddFilmService {
  
  constructor(private http:HttpClient) { }
  add(id: string, film_name: string,songId:string,song_name:string) {
    return this.http.post
      ('http://localhost:3000/add',
        {
          id: id,
          film_name: film_name,
          songId:songId,
          song_name:song_name,
        },{
          headers:{'content-type':'multipart/form-data'}
        })
  }
}
