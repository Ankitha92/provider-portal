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

}
