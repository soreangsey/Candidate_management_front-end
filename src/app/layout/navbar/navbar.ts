import { Component } from '@angular/core';

import {
  Router,
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import { AuthService } from '../../services/auth/auth-service';


@Component({
  selector: 'app-navbar',

  imports: [
    RouterLink,
    RouterLinkActive,
  ],

  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}


  // register(): void {

  //   this.authService.register();

  //   this.router.navigate(['/']);

  // }

}