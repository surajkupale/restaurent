import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenisationService implements HttpInterceptor{

  constructor() { }

  intercept(req: any, next: any){
    let tokenisedReq = req.clone({
      setHeaders:{
        Authorisation: `Bearer ${window.localStorage.getItem('sessiontoken')}`
      }
    })
      
    return next.handle(tokenisedReq);
  }
}
