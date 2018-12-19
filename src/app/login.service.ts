import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  url: String = '';
  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
  }

  loginAsCompany(user) {
      console.log(' in service' , user);
      return this.http.put(this.url + 'company/login', user, {headers: this.headers()});
  }

  loginAsConsumer(user) {
      return this.http.put(this.url + 'consumer/login', user);
  }

  loginAsRep(user) {
      return this.http.put(this.url + 'representative/login', user);
  }

  loginAsServiceProvider(user) {
    return this.http.put(this.url + 'service-provider/login', user);
  }

  headers() {
      return new HttpHeaders().set('Content-Type', 'application/json');
  }
}
