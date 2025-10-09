import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
constructor(private router: Router) {}
goLogin() { this.router.navigate(['/login']); }
goLogout() { this.router.navigate(['/login']); }
}
