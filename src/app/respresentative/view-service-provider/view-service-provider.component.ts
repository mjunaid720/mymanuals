import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-view-service-provider',
  templateUrl: './view-service-provider.component.html',
  styleUrls: ['./view-service-provider.component.css']
})
export class ViewServiceProviderComponent implements OnInit {

  constructor(private http: HttpClient) { }
  productUrl : any = '';
  servicePro : any = [];

  ngOnInit() {
    this.loadServiceProviders();
  }

  loadServiceProviders() {
    this.productUrl = 'http://localhost:8080/api/representative/service-providers';
    let scope = this;
    let header = new HttpHeaders();
    let data = localStorage.getItem('data');
    let prsData = JSON.parse(data);
    let obs = this.http.get(this.productUrl,{
      headers: new HttpHeaders().set('Authorization', prsData.token)
    });
    obs.subscribe((x) => {
      console.log(x);
      this.servicePro = x;
    });

  }

  allowThisSP(d) {
    let val =  {
      "serviceProviderId": d.id,
      "authorization": true
    };

    this.productUrl = 'http://localhost:8080/api/representative/service-providers';
    let scope = this;
    let header = new HttpHeaders();
    let data = localStorage.getItem('data');
    let prsData = JSON.parse(data);
    let obs = this.http.put(this.productUrl, val,{
      headers: new HttpHeaders().set('Authorization', prsData.token)
    });
    obs.subscribe((x) => {
      console.log(x);
      this.servicePro[d.id] = x;
    });
  }

  revokeThisSP(d) {
    let val =  {
      "serviceProviderId": d.id,
      "authorization": false
    };

    this.productUrl = 'http://localhost:8080/api/representative/service-providers';
    let scope = this;
    let header = new HttpHeaders();
    let data = localStorage.getItem('data');
    let prsData = JSON.parse(data);
    let obs = this.http.put(this.productUrl, val,{
      headers: new HttpHeaders().set('Authorization', prsData.token)
    });
    obs.subscribe((x) => {
      console.log(x);
      this.servicePro[d.id] = x;
    });
  }

}
