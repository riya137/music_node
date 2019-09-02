import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  passwordType: string = 'password';
  passwordShown: boolean = false;
  isLoggedIn = true;
  isLoading = false;
  eye_color = true;
  data = "";


  signupForm: FormGroup;
  error: any;
  errorMessage: any;
  film: string;

  constructor(private signupService: SignupService, private router: Router, private http: HttpClient) { }
  ngOnInit() {
    this.signupForm = new FormGroup({
      // 'username':new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.maxLength(20),Validators.minLength(6)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.pattern('^[a-z]+[0-9]+$'), Validators.minLength(6)]),
      'password1': new FormControl(null),
    }, this.passwordMatchValidator)

  }
  onSubmit() {
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    this.isLoading = true;
    if (this.isLoggedIn) {

      this.signupService.login(email, password).subscribe(resData => {
        //if(resData.panel=="admin"){
          //this.router.navigate(['/add-film']);
          //this.isLoading = false;
        //}
        //else{
          console.log(resData.email);
          this.router.navigate(['/film']);
       //}
      }, errorRes => {
        this.isLoading=false;
        console.log(errorRes);
      });
      this.signupForm.reset();
    } else {
      this.signupService.signup(email, password).subscribe(resData => {
        console.log(resData); 
        this.router.navigate(['/film']);  
      }, errorRes => {
        this.isLoading = false;
        throw errorRes;
      });
      this.signupForm.reset();
    }
  }
  passwordMatchValidator(g: FormGroup) {
    if(g.get('password1').value==null){
      return null;
    }
    if (g.get('password').value != g.get('password1').value)
      return { 'mismatch': true };
    else {
      return null;
    }
  
  }

  passwordToggle() {
    if (this.passwordShown) {
      this.passwordShown = false;
      this.passwordType = 'password';
      this.eye_color = !this.eye_color;

    } else {
      this.passwordShown = true;
      this.passwordType = 'text';
      this.eye_color = !this.eye_color;
    }
  }
  onSwitchMode() {
    this.isLoggedIn = !this.isLoggedIn;
  }
  getJson() {
    return this.http.get('http://localhost:3000/getJson')
      .subscribe(resData => {
        console.log(resData);
        this.data = JSON.stringify(resData);
        console.log(this.data);
      });

  

  }
  getFilm(){
    return this.http.get('http://localhost:3000/film')
    .subscribe(resData=>{
      console.log(resData); 
     // this.film = JSON.stringify(resData);
      //console.log(this.film);
    })
  }

}
