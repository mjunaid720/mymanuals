import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-serviceprovideremail',
  templateUrl: './serviceprovideremail.component.html',
  styleUrls: ['./serviceprovideremail.component.css']
})
export class ServiceprovideremailComponent implements OnInit {

  emailSent= false;
  errorText = '';
  model = {
    "subject" : '',
    "body" : ''
  };
  constructor( private http: HttpClient) { }

  ngOnInit() {
  }

  send(model:any){
    let scope = this;
    const data = localStorage.getItem('data');
    const prsData = JSON.parse(data);
    let obs =  this.http.post('http://localhost:8080/api/service-provider/email', this.model,{
        headers: new HttpHeaders().set('Authorization', prsData.token)
    });
    obs.subscribe((x) => {
      scope.emailSent = true;
      // scope.emailSent = true;
    }, (error) => {
      scope.errorText = 'service provider is not authorized to send email';
      scope.emailSent = false;
    });
  }

}
