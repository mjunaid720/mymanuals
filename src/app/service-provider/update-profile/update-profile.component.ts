import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {setContextPlayersDirty} from '@angular/core/src/render3/styling/class_and_style_bindings';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.getServiceProviderProfile();
  }
  msg = 0;
  rep = {
    email: '',
    phone: ''
  };

  ngOnInit() {
  }

  updateServiceProvider() {
    console.log(this.rep);
    let scope = this;
    if(this.rep.email == '' || this.rep.phone == ''){
      scope.msg = 1;
    } else {

      let header = new HttpHeaders();
      let data = localStorage.getItem('data');
      let prsData = JSON.parse(data);
      header.append('Authorization', prsData.token);
      let obs = this.http.put('http://localhost:8080/api/service-provider', this.rep,{
        headers: new HttpHeaders().set('Authorization', prsData.token).set('Content-Type', 'application/json'),
      });
      obs.subscribe((x: {email: '', phone: ''}) => {
          scope.msg = 2;
      });
    }

  }

  getServiceProviderProfile() {
    let scope = this;
    let header = new HttpHeaders();
    let data = localStorage.getItem('data');
    let prsData = JSON.parse(data);
    header.append('Authorization', prsData.token);
    let obs = this.http.get('http://localhost:8080/api/service-provider/profile',{
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
