import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  getEmail(){
    return localStorage.getItem('userData');
  }
}
