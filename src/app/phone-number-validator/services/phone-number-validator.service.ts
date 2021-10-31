import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountriesInterface } from 'src/app/shared/models/countries-interface.model';
import { ValidateInterface } from 'src/app/shared/models/validate-interface.model';
import { API_URLS } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberValidatorService {

  
  access_key = "eb588dbf70cb81df1c8d374269db9d18"

  constructor(private http: HttpClient) { }

  sendNumber(data:ValidateInterface){
    let body = JSON.stringify(data);

    let params = new HttpParams({ fromObject: { access_key:data.Access_Key, number:data.PhoneNumber, country_code: data.Country_Code } });

    let items$ = this.http.post(API_URLS.API_FORMS_VALIDATE,body,{params})
    
		return items$;
  }

  fetchCountryCodes(){
    // let body = JSON.stringify(PhoneNumberModel);

    let params = new HttpParams().set('access_key', 'eb588dbf70cb81df1c8d374269db9d18')

    let items$ = this.http.get(API_URLS.API_FETCH_COUNTRIES,{params})

    return items$

  }
}
