import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RestaurentModel } from '../Models/restaurent.model';
import { RestService1Service } from '../Services/rest-service1.service';

@Component({
  selector: 'restorrent-dashbord',
  templateUrl: './restorrent-dashbord.component.html',
  styleUrls: ['./restorrent-dashbord.component.css']
})
export class RestorrentDashbordComponent implements OnInit {

  formValue!: FormGroup;
  restData:any = [];
  restmodel = {};
  restModel: RestaurentModel = new RestaurentModel;
  constructor(private formbuilder: FormBuilder, private restService: RestService1Service,
    private router: Router) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      restName: this.formbuilder.control('', Validators.required),
      emailAdd: this.formbuilder.control('', Validators.required),
      mobNO: this.formbuilder.control('', Validators.required),
      restAdd: this.formbuilder.control(''),
      restService: this.formbuilder.control('')
    })

      this.restService.onGet().subscribe(res => { 
      this.restData = res;
       }, err => {
         if(err instanceof HttpErrorResponse) 
         if(err.status === 403) this.router.navigate(['login']) 
       })
  }

  display(item:FormGroup){
    console.log(item);
  }

  addRestaurent(){

    this.restmodel = {
      name: this.formValue.value.restName,
      email: this.formValue.value.emailAdd,
        mobile: this.formValue.value.mobNO,
        restAddress: this.formValue.value.restAdd,
        restServices: this.formValue.value.restService
    }

    // this.restModel.name = this.formValue.value.restName;
    // this.restModel.email = this.formValue.value.emailAdd;
    // this.restModel.mobile = this.formValue.value.mobNO;
    // this.restModel.restAddress = this.formValue.value.restAdd;
    // this.restModel.restServices = this.formValue.value.restService;

    this.restService.onPost(this.restmodel).subscribe(res =>{
      console.log(res);
      alert("Restaurent added successfully.");
      this.formValue.reset();
    }, error =>{
      alert("Error Occured While Saving Data!")
    }
    )
  }

  getRestaurent(){
    
  }

  deleteRestaurent(id: number){
    this.restService.onDelete(id).subscribe(res => {
      console.log(res);
      return res;
    })
  }

}
