import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { CountriesResponse } from '../interface/countries-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private urlCountries = 'https://restcountries.eu/rest/v2/lang/es';


  constructor(private http: HttpClient) { }


  getCountries(): Observable<any> {
    return this.http.get<CountriesResponse>(this.urlCountries);
  }
}
