import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  Title = 'Manutentor';
  LoginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      email: '',
      senha: ''
    });

  }

  save(): void {
    console.log(JSON.stringify(this.LoginForm.value));
  }

}
