import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService1Service } from '../Services/rest-service1.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formValue!: FormGroup;
  userData: any;
  constructor(private formbuilder: FormBuilder, private restService: RestService1Service, private router: Router) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      emailadd: this.formbuilder.control('', Validators.required),
      password: this.formbuilder.control('')
    })
  }

  authenticate(user:FormGroup){
    this.restService.onPost({email: user.value['emailadd'], password: user.value['password']}).subscribe(res =>{
      this.userData = res;
      this.formValue.reset();
      window.localStorage.setItem('sessiontoken', res.token);
      this.router.navigate(['dashbored']);
    });
  }

}
