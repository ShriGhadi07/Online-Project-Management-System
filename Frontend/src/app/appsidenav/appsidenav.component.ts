import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-appsidenav',
  templateUrl: './appsidenav.component.html',
  styleUrls: ['./appsidenav.component.css']
})
export class AppsidenavComponent {

 
  isLoginPage: boolean;
  Dashboard: boolean = true;
  ListProject: boolean = false;
  AddProject: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = this.isCurrentPageLogin();
      }
    });

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(()=>{
      this.Dashboard = this.router.url === '/dashboard';
      this.ListProject = this.router.url === '/list';
      this.AddProject = this.router.url === '/add';
    })

  }

  isCurrentPageLogin(): boolean {
    return this.router.url === '/login';
  }


isActive: boolean = false;

  toggleActive(): void {
    this.isActive = !this.isActive;
  }

}

