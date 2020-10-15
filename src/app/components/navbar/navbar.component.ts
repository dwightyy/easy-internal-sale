import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}

  @Input() isUserLoggedIn: boolean = this.getCurrentLoggedUserName().status;

  currentLoggedInUser: string;
  ngOnInit(): void {
    console.log(this.isUserLoggedIn);
  }

  getCurrentLoggedUserName(): { status: boolean; username: string } {
    let user: string = localStorage.getItem('username');
    if (user) {
      return { status: true, username: user };
    } else return { status: false, username: null };
  }

  userLogout() {
    this.authService.logUserOut(this.getCurrentLoggedUserName().username);
  }
}
