import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { LoginService } from '../services/login.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'login', component: LoginComponent}
    ]),
    ReactiveFormsModule
  ],
  declarations: [LoginComponent],

  providers: [
    LoginService
  ]
})
export class LoginModuleModule { }
