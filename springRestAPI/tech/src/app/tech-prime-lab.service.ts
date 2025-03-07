import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { techprimelab } from './techprimelab';
@Injectable({
  providedIn: 'root'
})
export class TechPrimeLabService {

  constructor(private httpClientObj:HttpClient ) { }

  private baseURL = "http://localhost:8088/tech";


  checkLog(user:string,pass:string)
  {
   if(user === 'shri' && pass==='8642')
   {
     return true;
   }
   else
   {
     return false;
   }
  }
 

  getAllProject():Observable<techprimelab[]>
  {
    return this.httpClientObj.get<techprimelab[]>('http://localhost:8088/tech/getAll')
  }

  addProject(obj:techprimelab)
  {
    return this.httpClientObj.post('http://localhost:8088/tech/save',obj)
  }

  updateStatus(pid:number,status:string)
  {
    const data = {pid,status}
//return this.httpClientObj.post('http://localhost:8088/update/pid/status')
    return this.httpClientObj.put('http://localhost:8088/tech/update',data)
  }

  getPaginatedRecords(page: number) {
    return this.httpClientObj.get<any>(`${this.baseURL}/pagination?page=${page}&size=10`);
  }

  getAllProjects(page: number, size: number, sort: string): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sort', sort);

    return this.httpClientObj.get<any>('http://localhost:8088/tech/getAll', { params });
  }

}
