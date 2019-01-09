import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {

  constructor(private http: HttpClient) {
    // this.getAdvertisement();
  }

  ngOnInit() {
  }

  getAdvertisement() {
    let scope = this;
    const data = localStorage.getItem('data');
    const prsData = JSON.parse(data);
    let obs =  this.http.post('http://localhost:8080/api/representative/email', {
      headers: new HttpHeaders().set('Authorization', prsData.token)
    });
    obs.subscribe((x) => {
      console.log(x);
    });
  }
}
