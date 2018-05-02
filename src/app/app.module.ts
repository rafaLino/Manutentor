import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginModuleModule } from './modules/login-module.module';
import { LoginComponent } from './components/login/login.component';
import { AlertComponent } from './directive/alert/alert.component';
import { AlertService } from './services/alert.service';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent },
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: '**', redirectTo: 'login', pathMatch: 'full'}
    ]),
  LoginModuleModule
  ],
  providers: [
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
