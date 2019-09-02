import { Component, OnInit } from '@angular/core';
import { SignupService } from './component/signup/signup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private signupService:SignupService){}

  ngOnInit(){
     this.signupService.autoLogin();
  }
}
