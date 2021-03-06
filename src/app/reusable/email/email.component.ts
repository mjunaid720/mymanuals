import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  emailSent= false;
  model = {
    "subject": '',
    "body": ''
  };
  constructor( private http: HttpClient) { }

  ngOnInit() {
  }

  send(model:any) {
    let scope = this;
    const data = localStorage.getItem('data');
    const prsData = JSON.parse(data);
    let obs =  this.http.post('http://localhost:8080/api/representative/email', this.model,{
      headers: new HttpHeaders().set('Authorization', prsData.token)
    });
    obs.subscribe((x) => {
      console.log(x);
      scope.emailSent = true;
    });
  }


}
