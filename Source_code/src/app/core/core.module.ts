import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './../core/components/home/home.component';
import { LoginComponent } from './../core/components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])
  ],
  declarations: [ 
    BsNavbarComponent,
    HomeComponent,
    LoginComponent
  ],
  exports: [
    BsNavbarComponent
  ]
})
export class CoreModule { }
