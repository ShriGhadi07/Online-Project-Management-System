import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { techprimelab } from './techprimelab';
import { Page } from 'src/Page';
import { login } from './login';


@Injectable({
  providedIn: 'root'
})
export class TechPrimeLabService {

  constructor(private httpClientObj:HttpClient ) { }

  private baseURL = "http://localhost:8090/tech";

  //calling login API
  login(log:login)
  {
    return this.httpClientObj.post('http://localhost:8090/api/c1/login',log);
  }

  //calling save API
  addProject(obj:techprimelab)
  {
    return this.httpClientObj.post(`${this.baseURL}/save`,obj)
  }

  //calling getall API
  getAllProjects(page: number, size: number, sortBy: string): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
    return this.httpClientObj.get<any>('http://localhost:8090/tech/getAll?'+'&pageNumber='+page+'&pageSize='+size+'&sortBy='+sortBy);
  }

  //calling updatestatus API
  updateStatus(pid:number,status:string)
  {
    const data = {pid,status}
    return this.httpClientObj.put(`${this.baseURL}/update` ,data)
  }

  //calling search project API
  searchProject(searchText: string,page: number, size: number): Observable<any[]> {
   return this.httpClientObj.get<any>('http://localhost:8090/tech/searchs?'+'&keyword='+searchText+'&pageNumber='+page+'&pageSize='+size);
  }

  //calling totalproject API
  totalProject(){
    return this.httpClientObj.get(`${this.baseURL}/totalProject`)
  }

  //calling closedproject API
  closedProject(){
    return this.httpClientObj.get(`${this.baseURL}/closed`)
  }

  //calling runningproject API
  runningProject(){
    return this.httpClientObj.get(`${this.baseURL}/running`)
  }

  //calling cancelproject API
  cancelProject(){
    return this.httpClientObj.get(`${this.baseURL}/cancel`)
  }

  //calling clouserdelay API
  clouserDelay(){
    return this.httpClientObj.get(`${this.baseURL}/clouser`)
  }

  //calling departmentwise project API
  getProjectsData(): Observable<any> {
    return this.httpClientObj.get(`${this.baseURL}/departmentwise`)
  }

}
