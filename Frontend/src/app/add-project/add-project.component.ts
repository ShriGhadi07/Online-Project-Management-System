import { Component } from '@angular/core';
import { techprimelab } from '../techprimelab';
import { TechPrimeLabService } from '../tech-prime-lab.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {

arrTech:Array<techprimelab>=[];
regTech:techprimelab={pid:0,pname:'',category:'',department:'',division:'',end_date:'',start_date:'',priority:'',
                      reason:'',type:'',location:'',status:''}

                      Reason = [
                        {value: 'Business', label: 'For Business'},
                        {value: 'Personal', label: 'For Personal'},
                        {value: 'Dealership', label: 'For Dealership'},
                        {value: 'Transport', label: 'For Transport'},
                      ]

                      selectReason(event: any) {
                        this.regTech.reason = event.target.value;
                      }

                      Type = [
                        {value: 'Internal', label: 'Internal'},
                        {value: 'Full Time', label: 'Full Time'},
                      ]

                      Priority = [
                        {value: 'High', label: 'High'},
                        {value: 'Medium', label: 'Medium'},
                        {value: 'Low', label: 'Low'},
                      ]

                      Department = [
                        {value: 'Strategy', label: 'Strategy'},
                        {value: 'HR', label: 'HR'},
                        {value: 'Maintance', label: 'Maintance'},
                        {value: 'Quality', label: 'Quality'},
                        {value: 'Finance', label: 'Finance'},
                        {value: 'Stores', label: 'Stores'},
                      ]

                      Category = [
                        {value: 'Quality A', label: 'Quality A'},
                        {value: 'Quality B', label: 'Quality B'},
                        {value: 'Quality C', label: 'Quality C'},
                        {value: 'Quality D', label: 'Quality D'},
                      ]

                      Division = [
                        {value: 'Filters', label: 'Filters'},
                        {value: 'Pumps', label: 'Pumps'},
                        {value: 'Compressor', label: 'Compressor'},
                      ]

                      Location = [
                        {value: 'Pune', label: 'Pune'},
                        {value: 'Mumbai', label: 'Mumbai'},
                        {value: 'Delhi', label: 'Delhi'},
                        {value: 'Kolhapur', label: 'Kolhapur'},
                      ]

                      constructor(private techService:TechPrimeLabService,
                                  private routerObj:Router){}


                      msg:string;
                      save()
                      {

                        if(this.regTech.start_date && this.regTech.end_date && this.regTech.start_date > this.regTech.end_date){
                          this.routerObj.navigate(['add'])
                          this.msg = "Start date cannot be after the end date.";

                        }else
                        {
                        let temp:techprimelab={pid:this.regTech.pid,pname:this.regTech.pname,category:this.regTech.category,department:this.regTech.department,division:this.regTech.division,
                                              end_date:this.regTech.end_date,start_date:this.regTech.start_date,priority:this.regTech.priority,reason:this.regTech.reason,
                                              type:this.regTech.type,location:this.regTech.location,status:'Registered'}

                                              this.techService.addProject(temp).subscribe((rec)=>{
                                                console.log(rec);
                                                this.routerObj.navigate(['list'])
                                              })
                      }
                    }

}
