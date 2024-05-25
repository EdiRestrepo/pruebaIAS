import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deparments } from '../models/departments.interface';
import { Observable, tap } from 'rxjs';
import { enviroments } from '../../../environments/environments';
import { Cities } from '../models/cities.interface';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  deparments$!:Observable<Deparments[]>;
  cities$!: Observable<Cities[]>;
  private _baseUrl:string = enviroments.baseUrl;

  constructor(private http: HttpClient) {
    this.deparments$ = this.fetchDeparments();

   }


  fetchDeparments():Observable<Deparments[]>{
    return this.http.get<Deparments[]>(this._baseUrl).pipe(
      tap(deparments => console.log('Departamentos: ',deparments, 'Cantidad departamentos: ', deparments.length))
    )
  }

  fethCities(id:number):Observable<Cities[]>{
    return this.http.get<Cities[]>(`${this._baseUrl}/${id}/cities`)
  }




  getDeparments(){
    return this.deparments$;
  }



}
