import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { FormGroup} from '@angular/forms';
import { RestService1Service } from '../Services/rest-service1.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private restService: RestService1Service) { }

  ngOnInit(): void {
  }

  login(loginform:any){
    console.log(loginform);
    this.restService.onLogin({email: loginform.restemail, password: loginform.restpassword}).subscribe(res =>{
      window.localStorage.setItem('sessiontoken', res.token);
      this.router.navigate(['dashbored']);
    });
  }
}
