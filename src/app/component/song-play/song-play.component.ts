import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Constant } from 'src/app/shared/constant';
import { HttpClient } from '@angular/common/http';
import { LocalService } from 'src/app/shared/local.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-song-play',
  templateUrl: './song-play.component.html',
  styleUrls: ['./song-play.component.css']
})
export class SongPlayComponent implements OnInit {

  songID: string;
  filmID: string;
  heart = false;
  like = false;
  dislike = false;
  message: string = "";
  temp: any;
  temp_songName: string;
  constructor(private active: ActivatedRoute,
    private router: Router,
    private constant: Constant,
    private http: HttpClient,
    private local: LocalService) { }


  ngOnInit() {
    this.active.params
      .subscribe(
        (params: Params) => {
          this.songID = params['songId'];
          //this.filmID = params[':filmId']
        }
      )
    this.active.parent.url.subscribe((urlPath) => {
      this.filmID = urlPath[urlPath.length - 1].path;
      console.log(this.filmID);


    })

  }
  onClickHeart() {
    this.heart = !this.heart;
    this.message = "Added to your Favorite";
    this.temp = this.local.getEmail();
    console.log(this.temp);

    var flag = false;
    for (var i = 0; i < this.constant.films.length; i++) {

      for (var j = 0; j < this.constant.films[i]["song_list"].length; j++) {
        // console.log(this.constant.films[i]["song_list"][j]);

        if (this.constant.films[i]["song_list"][j]["songId"] === this.songID) {
          console.log(this.constant.films[i]["song_list"][j]["song_name"]);
          this.temp_songName=this.constant.films[i]["song_list"][j]["song_name"];

          flag = true;
          break;
        }

      }

      if (flag) {
        break;
      }
    }
    
    return this.http.post('http://localhost:3000/update',
      {
        email: this.temp,
        songID: this.songID,
        songName: this.temp_songName
      }).subscribe(resData => {
        console.log(resData);
      })

  }
  onClickLike() {
    this.like = !this.like;
  }
  viewPlaylist(){
   this.router.navigate(['/favorite']);
  }

}
