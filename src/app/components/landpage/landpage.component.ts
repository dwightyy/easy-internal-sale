import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-landpage',
  templateUrl: './landpage.component.html',
  styleUrls: ['./landpage.component.sass'],
})
export class LandpageComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}
}
