import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SliderComponent } from './component/slider/slider.component';
import { SignupComponent } from './component/signup/signup.component';
import { FilmComponent } from './component/film/film.component';
import { FilmDetailsComponent } from './component/film-details/film-details.component';
import { SongPlayComponent } from './component/song-play/song-play.component';
import { AddFilmComponent } from './component/add-film/add-film.component';
import { FavoriteComponent } from './component/favorite/favorite.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'add-film',component:AddFilmComponent},
  {path:'signup',component:SignupComponent},
  {path:'favorite',component:FavoriteComponent},
  {path: 'film', component: FilmComponent, children: [
    {
      path: ':filmId', component: FilmDetailsComponent, children: [
        { path: ':songId', component: SongPlayComponent }
      ]
    }
  ]
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
