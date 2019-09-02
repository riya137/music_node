import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }
  errors:[
    {
      error_type:[
        {error_code:"",error_meassage:""},
        {error_code:"",error_message:""}
      ]
    },
    {
      error_type:[
        {error_code:"",error_meassage:""},
        {error_code:"",error_message:""}
      ]
    },
    {
      error_type:[
        {error_code:"",error_meassage:""},
        {error_code:"",error_message:""}
      ]
    }
  ]
}
