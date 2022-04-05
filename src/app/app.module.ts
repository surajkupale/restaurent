import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './Rotings/routing.modules';
import { AppComponent } from './app.component';
import {test1Component} from './test1.component';
import { ResComponent } from './res/res.component'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RoutingComponent } from './Rotings/routing.modules'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { RestService } from './Services/rest-service.service';
import { TokenisationService } from './Services/tokenisation.service';
import { DepartmentComponent } from './department/department.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestFormComponent } from './test-form/test-form.component';
import { RestorrentDashbordComponent } from './restorrent-dashbord/restorrent-dashbord.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
 
@NgModule({
  declarations: [
    AppComponent, test1Component, ResComponent, RoutingComponent, DepartmentComponent, PageNotFoundComponent, TestFormComponent, RestorrentDashbordComponent, LoginComponent, SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RestService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenisationService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
