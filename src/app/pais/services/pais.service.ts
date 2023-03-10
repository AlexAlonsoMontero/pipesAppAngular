import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl =  'https://restcountries.com/v3.1';
  getHttpParams(){
    return new HttpParams()
      .set ('fields' , 'name,population,region,subregion,flags,cca2,capital');
  }

  constructor( private http: HttpClient) { }

  buscarPais (termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>( url , { params: this.getHttpParams()});

  }

  buscarCapital(termino: string):Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>( url ,{ params: this.getHttpParams()} );
  }

  getPaisPorAlpha (id : string): Observable<Country[]> {
    console.log("------------------------")
    console.log(id)
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }

  buscarregion ( region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/subregion/${region}`;
    return this.http.get<Country[]>(url, { params: this.getHttpParams()});
  }


}
