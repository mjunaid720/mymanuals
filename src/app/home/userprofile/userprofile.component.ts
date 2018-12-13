import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  productUrl: any = '';
  showInterested : boolean = false;
  constructor(private http: HttpClient, private domSanitizer: DomSanitizer) {

  }
  products: any = [];
  userData: any = [];
  ngOnInit() {
    this.loadProdudtsWithIntrests();
    this.loadUserProfile();
  }

  isEmpty(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  loadProdudtsWithIntrests(){
    this.productUrl = 'http://localhost:8080/api/consumer/products';
    let scope = this;
    let header = new HttpHeaders();
    let data = localStorage.getItem('data');
    let prsData = JSON.parse(data);
    let obs;
    if (!this.isEmpty(prsData)) {

      if (prsData.role == 'consumer') {
        this.showInterested = true;
          header.append('Authorization', prsData.token);
        obs = this.http.get(this.productUrl, {
          headers: new HttpHeaders().set('Authorization', prsData.token).set('Content-Type', 'application/json'),
        });
        obs.subscribe((x) => {
          this.products = x;
        });
      }
    }
  }

  loadUserProfile() {
    let data = localStorage.getItem('data');
    let prsData = JSON.parse(data);
    let obs = this.http.get('http://localhost:8080/api/consumer/profile', {
      headers: new HttpHeaders().set('Authorization', prsData.token).set('Content-Type', 'application/json'),
    });
    obs.subscribe((x) => {
      this.userData = x;
    });
  }

  subscribeOrUnsubscribe(value){
    if(value == 'sub') {
      let data = localStorage.getItem('data');
      let prsData = JSON.parse(data);
      let obs = this.http.put('http://localhost:8080/api/consumer/subscription',{
        "subscription": true
      }, {
        headers: new HttpHeaders().set('Authorization', prsData.token).set('Content-Type', 'application/json'),
      });
      obs.subscribe((x) => {
        this.userData = x;
      });
    } else if(value == 'unsub') {
      let data = localStorage.getItem('data');
      let prsData = JSON.parse(data);
      let obs = this.http.put('http://localhost:8080/api/consumer/subscription',{
        "subscription": false
      }, {
        headers: new HttpHeaders().set('Authorization', prsData.token).set('Content-Type', 'application/json'),
      });
      obs.subscribe((x) => {
        this.userData = x;
      });
    }

  }


}
