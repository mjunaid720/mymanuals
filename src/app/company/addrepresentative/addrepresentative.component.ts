import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-addrepresentative',
  templateUrl: './addrepresentative.component.html',
  styleUrls: ['./addrepresentative.component.css']
})
export class AddrepresentativeComponent implements OnInit {

  constructor(private http: HttpClient) {
      this.getRepresentative();
  }
  repos : any = [];
  rep = {
      username : '',
      password : '',
      name : '',
      description : ''
  };

  addRepresentative () {
      let scope = this;
      let header = new HttpHeaders();
      let data = localStorage.getItem('data');
      let prsData = JSON.parse(data);
      console.log(prsData);
      header.append('Authorization', prsData.token);


      // headers = headers.set('Authorization', prsData.token);
      let obs = this.http.post('http://localhost:8080/api/company/representative', this.rep,{
          headers: new HttpHeaders().set('Authorization', prsData.token).set('Content-Type', 'application/json'),
      });
      obs.subscribe((x) => {
          scope.getRepresentative();
          this.setToEmpty();
      });


  }

    setToEmpty() {
        this.rep = {
            username : '',
            password : '',
            name : '',
            description : ''
        };
    }

    getRepresentative (){
        let data = localStorage.getItem('data');
        let prsData = JSON.parse(data);
        let obs = this.http.get('http://localhost:8080/api/company/representatives', {
            headers: new HttpHeaders().set('Authorization', prsData.token).set('Content-Type', 'application/json'),
        });
        obs.subscribe((x) => {
            this.repos = x;
        });


    }
  ngOnInit() {

  }

}
