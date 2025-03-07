import { Component } from '@angular/core';
import { techprimelab } from '../techprimelab';
import { TechPrimeLabService } from '../tech-prime-lab.service';
import { Router } from '@angular/router';
import { Page, Sort } from 'src/Page';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrls: ['./project-listing.component.css']
})
export class ProjectListingComponent {
  
  pname: string;
  projects: any;
  
 // pageSize = 7;
  sortField = 'pid';
  sortOrder = 'asc';
  page: number = 1;
  count: number = 28;
  tableSize = 7;
  tableSizes: any = [5, 10, 15, 20]

  constructor(private techService: TechPrimeLabService,
    private routerObj: Router) { }


    ngOnInit(): void {
      this.loadProjects();
    }
  
    loadProjects() {
      const sortBy = `${this.sortField}`;
      const offset = (this.page - 1);
      this.techService.getAllProjects(offset, this.tableSize, sortBy).subscribe((data)=>{
        this.projects = data;
       // console.log(this.projects)
      })
  
    }

  onTableDataChange(event: any){
    this.page = event;
    this.loadProjects();
    this.onSearch();
  }

  

  

  searchResults: any[];
  searchText: string = '';

  onSearch(): void {

    if (this.searchText === '') {
      this.loadProjects();
    } else {
      console.log(this.searchText)
      const offset = (this.page - 1);
      this.techService.searchProject(this.searchText,offset,this.tableSize).subscribe((rec) => {
          this.projects = rec;
          console.log(rec);
        },
        (error: any) => {
          console.error('Error occurred while fetching search results:', error);
        }
      );
    }
  }

  sortOptions = [
    { value: 'pname', label: 'Project Name' },
    { value: 'priority', label: 'Priority' },
    { value: 'category', label: 'Category' },
    { value: 'reason', label: 'Reason' },
    { value: 'division', label: 'Division' },
    { value: 'department', label: 'Department' },
    { value: 'location', label: 'Location' },
    { value: 'status', label: 'Status' },
  ];

  onSort(event: any) {
    const selectedSortOption = event.target.value;
    this.sortField = selectedSortOption;
    this.loadProjects();
  }

  msg1:any;
  updateStatus(pid: number, newStatus: string) {
    this.techService.updateStatus(pid, newStatus).subscribe(
      (msg) => {
        this.msg1 = msg;
       // console.log("Success:"+this.msg1.success)
        //console.log("Message:"+this.msg1.message)
        // Update the status in the UI without refreshing the page
        const recordToUpdate = this.projects.find((arrTech: { pid: number; }) => arrTech.pid === pid);
        if (recordToUpdate) {
          recordToUpdate.status = newStatus;
        //  console.log("Status:"+newStatus)
        }
      },
      (error) => {
        console.error('Error updating status:', error);
      }
    );
  }
}
