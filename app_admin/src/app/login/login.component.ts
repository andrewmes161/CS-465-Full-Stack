import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication';
import { User } from '../models/user';
// import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public formError: string = '';
  
  public credentials = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {}

  public onLoginSubmit(): void {
    this.formError = '';
    console.log(this.credentials.email + ' ' + this.credentials.password);
    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'All fields are required by law. Continious disobenence will result in trial by Dance off... you have been warned!!!';
    } else {
      this.doLogin();
    }
  }

  private doLogin(): void {
  this.authenticationService.login(this.credentials)
    .then(() => this.router.navigateByUrl('#'))
    .catch((message) => this.formError = message);
  }
}