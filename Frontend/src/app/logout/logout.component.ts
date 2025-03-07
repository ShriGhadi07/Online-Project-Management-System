import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TechPrimeLabService } from '../tech-prime-lab.service';
import { login } from '../login';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {


  constructor(private techService:TechPrimeLabService,private routerObj:Router){}
  response:any;
  logObj:login={email:'',password:''}
  ngOnInit(): void {
    this.techService.login(this.logObj).subscribe((data)=>{
       this.response = data;
      
    if(this.response.message === "Valid user" && this.response.success === true)
    {
      localStorage.setItem('userName','9075')
    }
    else
    {   
      localStorage.setItem('userName',"8080")
      this.routerObj.navigate(['login'])
    }
    })
    // localStorage.setItem('userName','')
    // this.routerObj.navigate(['login'])
  }
}