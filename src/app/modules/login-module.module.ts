import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModuleRoutingModule } from './login-module-routing.module';
import { LoginComponent } from '../components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginModuleRoutingModule
  ],
  declarations: [LoginComponent]
})
export class LoginModuleModule { }
