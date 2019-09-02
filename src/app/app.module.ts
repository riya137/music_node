import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { SliderComponent } from './component/slider/slider.component';
import { FilmComponent } from './component/film/film.component';
import { Constant } from './shared/constant';
import { FilmDetailsComponent } from './component/film-details/film-details.component';
import { SongPlayComponent } from './component/song-play/song-play.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { FilterPipe } from './shared/filter.pipe';
import { FilPipe } from './shared/fil.pipe';
import { FooterComponent } from './component/footer/footer.component';
import { AddFilmComponent } from './component/add-film/add-film.component';
import { ImageComponent } from './component/image/image.component';
import { TestComponent } from './component/test/test.component';
import { FavoriteComponent } from './component/favorite/favorite.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    HomeComponent,
    SliderComponent,
    FilmComponent,
    FilmDetailsComponent,
    SongPlayComponent,
    LoadingSpinnerComponent,
    FilterPipe,
    FilPipe,
    FooterComponent,
    AddFilmComponent,
    ImageComponent,
    TestComponent,
    FavoriteComponent,
   
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [Constant],
  bootstrap: [AppComponent]
})
export class AppModule { }
