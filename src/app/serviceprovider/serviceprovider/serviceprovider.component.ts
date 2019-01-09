import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-serviceprovider',
  templateUrl: './serviceprovider.component.html',
  styleUrls: ['./serviceprovider.component.css']
})
export class ServiceproviderComponent implements OnInit {

  serviceProviders:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  getServiceProvider(id) {
    const data = localStorage.getItem('data');
    const prsData = JSON.parse(data);
    console.log(prsData);

    if (!this.isEmpty(prsData)) {
      let obs =  this.http.post('http://localhost:8080/api/consumer/product/"'+id+'"/service-providers',
      {
        headers: new HttpHeaders()
          .set('Authorization', prsData.token)
      });
      obs.subscribe((x) => {
          this.serviceProviders = x;
      });
    } else {
      confirm('Please login first.');
    }
  }

  isEmpty(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }


}
