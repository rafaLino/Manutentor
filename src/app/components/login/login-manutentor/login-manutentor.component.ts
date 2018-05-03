import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { AlertService } from '../../../services/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  templateUrl: './login-manutentor.component.html',
  styleUrls: ['./login-manutentor.component.css']
})
export class LoginManutentorComponent implements OnInit {
  Title = 'Manutentor';
  LoginForm: FormGroup;
  loading = false;
  returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.LogOut();

    this.LoginForm = this.fb.group({
      Email: '',
      Password: ''
    });

  }

  Login(): void {
    const data: string = JSON.stringify(this.LoginForm.value);
     this.service.LoginFitter(data)
     .subscribe(
       resp => {
            this.router.navigate(['fitter']); 
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
              
    }

LogOut(): void {
  this.service.LogOut();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}

back(){
  this.router.navigate(['login']);
}
}
