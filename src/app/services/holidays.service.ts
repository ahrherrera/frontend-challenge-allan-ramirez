import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CountryResponse } from '../models/country.model';
import { HolidaysResponse } from '../models/holiday.model';

const apiUrl = environment.API_URL;

@Injectable({
  providedIn: 'root'
})

export class HolidaysService {

  constructor(private httpClient: HttpClient) { 
  }

  getCountries(){
    const url = `${apiUrl}/holidays/Countries`;
    return this.httpClient.post<CountryResponse>(url, {});
  }

  getHolidays(countryCode : string){
    const url = `${apiUrl}/holidays/List`;
    return this.httpClient.post<HolidaysResponse>(url, {
      "country_code": countryCode,
      "year": 2022
    });
  }

}
