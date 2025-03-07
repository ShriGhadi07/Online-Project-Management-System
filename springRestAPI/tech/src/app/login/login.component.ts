import { Component } from '@angular/core';
import { TechPrimeLabService } from '../tech-prime-lab.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private techService:TechPrimeLabService,
    private routerObj:Router) { }

    logObj:any={user:'',pass:''}
  log()
  {
    if(this.techService.checkLog(this.logObj.user,this.logObj.pass))
    {
      localStorage.setItem('userName','9075')
      this.routerObj.navigate(['dashboard'])
    }
    else
    {
      alert("invalid username and password")
      this.routerObj.navigate(['login'])
    }
  }


}
