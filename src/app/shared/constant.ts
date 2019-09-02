import { Injectable } from '@angular/core';

@Injectable()
export class Constant {
  films =
    [
      {
        id: "1",
        film_name: "Kalank",
        song_list: [
          { songId: "1", song_name: "nainowale", song_play: "assets/song/nainowali.mp3" },
          { songId: "2", song_name: "Dil Diyan", song_play: "assets/song/dil diyan.mp3" },
          { songId: "3", song_name: "Nazm", song_play: "assets/song/nazm.mp3" },
        ],
        film_image:"assets/images/kalank.jpg"
      },  
      {
        id: "2",
        film_name: "Student of the Year 2",
        song_list: [
          { songId: "4", song_name: "Jaane Nahi" },
          { songId: "5", song_name: "All izz Well" },
          { songId: "6", song_name: "Give me Some sunshine" },
        ],
        film_image:"assets/images/soty2.jpg"
      },
      {
        id: "3",
        film_name: "Bharat",
        song_list: [
          { songId: "7", song_name: "poq" },
          { songId: "8", song_name: "div" },
          { songId: "9", song_name: "para" },
        ],
        film_image:"assets/images/bharat.jpg"
      },
      {
        id: "4",
        film_name: "Luka Chupi",
        song_list: [
          { songId: "10", song_name: "poq" },
          { songId: "11", song_name: "div" },
          { songId: "12", song_name: "para" },
        ],
        film_image:"assets/images/luka_chupi.jpg"
      },
      {
        id: "5",
        film_name: "Gully-Boy",
        song_list: [
          { songId: "16", song_name: "poq" },
          { songId: "17", song_name: "div" },
          { songId: "18", song_name: "para" },
        ],
        film_image:"assets/images/gully_boy.jpg"
      },
      {
        id: "6",
        film_name: "leela",
        song_list: [
          { songId: "16", song_name: "poq" },
          { songId: "17", song_name: "div" },
          { songId: "18", song_name: "para" },
        ],
        film_image:"assets/images/leela.jpg"
      },
      {
        id: "7",
        film_name: "2.0",
        song_list: [
          { songId: "16", song_name: "poq" },
          { songId: "17", song_name: "div" },
          { songId: "18", song_name: "para" },
        ],
        film_image:"assets/images/2.0.jpg"
      },
      {
        id: "8",
        film_name: "Drsihyam",
        song_list: [
          { songId: "16", song_name: "poq" },
          { songId: "17", song_name: "div" },
          { songId: "18", song_name: "para" },
        ],
        film_image:"assets/images/drish.jpg"
      },
     
    ]


 


}