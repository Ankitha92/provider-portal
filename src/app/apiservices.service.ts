import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    
    return this.http.get('https://www.express-scripts.com/frontendservice/proxinator/1/member/v1/drugpricing/prelogin/oepc/drug/search?name=Lisin&context=oepc')
  }

}
