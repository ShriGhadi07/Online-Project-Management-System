import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TechPrimeLab';
 
  isLoginPage: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = this.isCurrentPageLogin();
      }
    });
  }

  isCurrentPageLogin(): boolean {
    return this.router.url === '/login';
  }


}
