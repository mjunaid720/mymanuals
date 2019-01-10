import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {

  advertise : any;
  hasValue: boolean = false;
  constructor(private http: HttpClient) {
    this.getAdvertisement();
  }

  ngOnInit() {
  }

  getAdvertisement() {
    let scope = this;
    const data = localStorage.getItem('data');
    const prsData = JSON.parse(data);
    let obs =  this.http.get('http://localhost:8080/api/public/advertisement', {
      headers: new HttpHeaders()
    });
    obs.subscribe((x) => {
      scope.advertise = x;
      console.log(scope.advertise);
      if(scope.advertise.hasOwnProperty('imageUrl')){
        scope.hasValue = true;
      }
    });
  }
}
