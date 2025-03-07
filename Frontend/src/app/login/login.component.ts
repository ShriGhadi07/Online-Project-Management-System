import { Component } from '@angular/core';
import { TechPrimeLabService } from '../tech-prime-lab.service';
import { Router } from '@angular/router';
import { login } from '../login';
import { authGuard } from '../auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {


  myimage:string = "assets/img/login-bg-1.svg";
  msg:string;

  constructor(private techService:TechPrimeLabService,
    private routerObj:Router,private auth:authGuard) { }

  //regLog:login={email:'',password:''}

  response:any;

  logObj:login={email:'',password:''};

  log()
  {
    let temp:login={email:this.logObj.email,password:this.logObj.password}
    console.log(temp);

    this.techService.login(temp).subscribe((data)=>{
        this.response = data;
        console.log(this.response)

    if(this.response.message === "Valid user" && this.response.success === true)
    {
      localStorage.setItem('userName','9075')
      this.routerObj.navigate(['dashboard'])
    }
    else
    {
      this.msg="invalid credentials";
      this.routerObj.navigate(['login'])
    }

    }) 
  }
}