import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.sass'],
})
export class LandpageComponent implements OnInit {
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
