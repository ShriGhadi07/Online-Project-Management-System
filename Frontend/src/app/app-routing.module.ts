import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { AppsidenavComponent } from './appsidenav/appsidenav.component';
import { authGuard } from './auth.guard';



const routes: Routes = [{path:'add',component:AddProjectComponent,canActivate:[authGuard]},
                        {path:'list',component:ProjectListingComponent,canActivate:[authGuard]},
                        {path:'logout',component:LogoutComponent},
                        {path:'dashboard',component:DashboardComponent,canActivate:[authGuard]},
                        {path:'',redirectTo:'login',pathMatch:'full'},
                        {path:'login',component:LoginComponent},
                        {path:'dash',component:AppComponent},
                        {path:'sideNav',component:AppsidenavComponent},                  
                      ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
