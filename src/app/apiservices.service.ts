import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ApiservicesService {

  API_URL = 'https://providerportalapi.azurewebsites.net/api/';

  constructor(private http: HttpClient) { }

  public post(url: string, data: any): Observable<any> {
    return this.http.post(this.API_URL + url,data).pipe(map(res => res));
  }
  public getPrice(){
    const httpOptions = {    
    
      headers: new HttpHeaders({    
        'Content-Type': 'application/json',    
        'Access-Control-Allow-Origin': '*',    
      })    
    }; 
    
   
    return this.http.get('https://www.express-scripts.com/frontendservice/proxinator/1/member/v1/drugpricing/prelogin/oepc/drug/search?name=dolo&context=oepc',httpOptions)
  }
  public get(url: string): Observable<any> {
    return this.http.get(this.API_URL + url).pipe(map(res => res));
  }

}
