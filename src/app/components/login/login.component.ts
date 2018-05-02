import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { Location } from '@angular/common';


@Component({
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  Title = 'Manutentor';
  LoginForm: FormGroup;
  loading = false;
  returnUrl: string ='/';

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
     this.service.Login(data)
     .subscribe(
       resp => {
                    this.returnUrl = '/home';
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
              this.router.navigateByUrl(this.returnUrl);
    }

LogOut(): void {
  this.service.LogOut();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}


}
