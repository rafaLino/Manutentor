import 'materialize-css';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AlertComponent } from './directive/alert/alert.component';
import { AlertService } from './services/alert.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { NotfoudComponent } from './components/notfoud/notfoud.component';
import { AuthguardService } from './guard/authguard.service';
import { LoginManutentorComponent } from './components/login/login-manutentor/login-manutentor.component';
import { FitterModule } from './modules/fitter.module';
import { ClientModule } from './modules/client.module';
import { SharedModule } from './components/shared/shared.module';
import { MzModalModule } from 'ng2-materialize';
import { MzButtonModule } from 'ng2-materialize';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    LoginManutentorComponent,
    NotfoudComponent
  ],
  imports: [
   BrowserModule,
   BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([            
      {path: 'loginManutentor', component: LoginManutentorComponent },
      {path: 'login', component: LoginComponent },
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: '**', redirectTo: 'login', pathMatch: 'full'}
    ],
  {onSameUrlNavigation: `reload`}
  ),
    ReactiveFormsModule,
    ClientModule,
    FitterModule

  ],
  providers: [
    AlertService,
    LoginService,
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
