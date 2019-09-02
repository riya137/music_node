import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';
import { environment } from '../../../environments/environment';


interface SignupResponseData {
  email: string,
  panel:string;
}
@Injectable({
  providedIn: 'root'

})
export class SignupService {
  user = new Subject<User>()
  error: boolean=false;
  errorCode: any;
  constructor(private http: HttpClient) { }

  //signup(email: string, password: string) {
  //return this.http.post<SignupResponseData>
  //('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey,
  //{
  //email: email,
  //password: password,
  //returnSecureToken: true


  //}).pipe(catchError(this.handleError), tap(resData => {
  //const expressionDate = new Date(new Dae().getTime() + +resData.expiresIn * 1000);
  //const user = new User(resData.email, resData.localId, resData.idToken, expressionDate);
  //this.user.next(user);
  //localStorage.setItem('userData', JSON.stringify(user));
  // }))
  //}
  signup(email: string, password: string) {
    return this.http.post<SignupResponseData>
      ('http://localhost:3000/signup',
        {
          email: email,
          password: password
        }).pipe(catchError(this.handleError),tap(resData =>{
            const user=new User(resData.email);
            this.user.next(user);
            localStorage.setItem('userData', JSON.stringify(user));
        }));
  }
  login(email: string, password: string) {
    return this.http.post<SignupResponseData>
      ('http://localhost:3000/login',
        {
          email: email,
          password: password
        }).pipe(catchError(this.handleError),tap(resData =>{
          const user=new User(resData.email);
          this.user.next(user);
          localStorage.setItem('userData', JSON.stringify(user));
      }));
  }
  handleError(error) {
    let errorMessage = '';
    //this.error=true;
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      if(this.errorCode==error.status){
       // errorMessage="Email Does not Exits";e
       errorMessage="Invalid"
      }

      // server-side error
      //errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      errorMessage="Email Does not Exists";
      this.error=true;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  
  logout() {
    this.user.next(null);
  }
  autoLogin(){
    console.log("hello");
  }
}
