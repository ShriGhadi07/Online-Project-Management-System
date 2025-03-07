
import { Component, OnInit } from '@angular/core';
import { TechPrimeLabService } from '../tech-prime-lab.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
	
export class DashboardComponent implements OnInit {
	totalProject:any;
	  closed:any;
	  cancel:any;
	  running:any;
    delay:any;
    data: any[] = [];

  
  
 // data:any;
  constructor(private techService: TechPrimeLabService) { }

  ngOnInit(): void {
    this.fetchData();
    
    this.techService.totalProject().subscribe((data)=>{
      		this.totalProject = data;
          console.log("Total Project:"+this.totalProject)
      	})
      	this.techService.closedProject().subscribe((data)=>{
      		this.closed = data;
          console.log("Closed Project:"+this.closed)
      	})
      	this.techService.cancelProject().subscribe((data)=>{
      		this.cancel = data;
          console.log("Cancel Project:"+this.cancel)
      	})
      	this.techService.runningProject().subscribe((data)=>{
      		this.running = data;
          console.log("Running Project:"+this.running)
      	})
        this.techService.clouserDelay().subscribe((data)=>{
          this.delay = data;
          console.log("Clouser Delay Project:"+this.delay)
        })
  }

  fetchData(): void {
    this.techService.getProjectsData().subscribe(data => {
      //console.log("Department Wise Projects:"+data)
      this.data = data.map((item: any[]) => {
        
        return {
          name: item[0].toString(),
          series: [
            { name: 'Total Project', value: item[1] },
            { name: 'Closed Project', value: item[2] }
          ]
          
        };
        
      });
      
    });
    
  }

  view: [number, number] = [320, 350];
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Departments';
  yAxisLabel = 'Counts';
  colorScheme: any = {
    domain: [ '#0d6efd','#5AA454'],
  };
}
