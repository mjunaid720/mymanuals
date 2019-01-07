import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {hasOwnProperty} from 'tslint/lib/utils';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.getServiceProviderProfile();
  }
  productUrl = '';
  rep = {
    email: '',
    phone: ''
  };

  ngOnInit() {
  }

  updateServiceProvider() {

  }

  getServiceProviderProfile() {
    this.productUrl = 'http://localhost:8080/api/representative/service-providers';
    let scope = this;
    let header = new HttpHeaders();
    let data = localStorage.getItem('data');
    let prsData = JSON.parse(data);
    header.append('Authorization', prsData.token);
    let obs = this.http.get(this.productUrl,{
      headers: new HttpHeaders().set('Authorization', prsData.token).set('Content-Type', 'application/json'),
    });
    obs.subscribe((x: {email: '', phone: ''}) => {
      if (x.hasOwnProperty('email') && x.hasOwnProperty('phone')) {
        this.rep = {
          email : x.email,
          phone : x.phone
        };
      }
    });
  }

}
