import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-add-service-provider',
  templateUrl: './add-service-provider.component.html',
  styleUrls: ['./add-service-provider.component.css']
})
export class AddServiceProviderComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.getRepresentative();
  }
  repos : any = [];
  sp = {
    username : '',
    password : '',
    name : '',
    authorization : true,
    phone: '',
    email: ''
  };

  addRepresentative () {
    let scope = this;
    let header = new HttpHeaders();
    let data = localStorage.getItem('data');
    let prsData = JSON.parse(data);
    console.log(prsData);
    header.append('Authorization', prsData.token);


    // headers = headers.set('Authorization', prsData.token);
    let obs = this.http.post('http://localhost:8080/api/company/service-provider', this.sp,{
      headers: new HttpHeaders().set('Authorization', prsData.token).set('Content-Type', 'application/json'),
    });
    obs.subscribe((x) => {
      scope.getRepresentative();
      this.setToEmpty();
    });


  }

  setToEmpty() {
    this.sp = {
      username : '',
      password : '',
      name : '',
      authorization : true,
      phone : '',
      email: ''
    };
  }

  getRepresentative (){
    let data = localStorage.getItem('data');
    let prsData = JSON.parse(data);
    let obs = this.http.get('http://localhost:8080/api/company/service-providers', {
      headers: new HttpHeaders().set('Authorization', prsData.token).set('Content-Type', 'application/json'),
    });
    obs.subscribe((x) => {
      this.repos = x;
    });


  }
  ngOnInit() {

  }

}
