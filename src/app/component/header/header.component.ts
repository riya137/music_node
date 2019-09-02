import { Component, OnInit, OnDestroy } from '@angular/core';
import { SignupService } from '../signup/signup.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  isAuthenticated=false;
  private userSub:Subscription;
  constructor(private signupService:SignupService,private router:Router) { }

  ngOnInit() {
    this.userSub=this.signupService.user.subscribe(user=>{
        console.log(this.isAuthenticated);
          this.isAuthenticated=!!user;
    });

  }
  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
  onLogout(){
    this.signupService.logout();
    this.router.navigate(['/signup']);
  }
}
