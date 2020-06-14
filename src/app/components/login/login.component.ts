import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loginError: boolean = false;
  loginErrorMessage: string = 'Não foi possivel concluir o login ao site.';

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  showLoginError(): void {
    this.loginError = true;
  }

  handleLoginAction() {
    let username = 'dwight';
    let password = '123';

    if (username === this.username && password === this.password) {
      this.authService.logUserIn(username);
    } else this.showLoginError();
  }

  resetLoginFields(): void {
    console.log('inside reset');
    this.username = '';
    this.password = '';
  }

  closeErrorMessage(): void {
    this.loginError = false;
    this.resetLoginFields();
  }
}
