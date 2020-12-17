import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface Persona {
  nombre: string;
  referidos: number;
  area?: string;
  cargo?: string;
  celular?: number;
  email?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicioService {


personas: Persona[]

  constructor(private http: HttpClient ) { }

  getProductsSmall() {
    return this.http.get<any>('../assets/personas.json')
    .toPromise()
    .then(res => <Persona[]>res.data)
    .then(data => { return data; });
  }
}
