import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


export interface Employee {
  id: number;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
  profile_image: "";
}

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  employee: Employee[]
  constructor(private http: HttpClient) {
    
  }
  getEmployee() {
    return this.http.get<any>('http://dummy.restapiexample.com/api/v1/employees')
      .toPromise()
      .then(res => <Employee[]>res.data)
      .then(data => { return data; });
  }
}
