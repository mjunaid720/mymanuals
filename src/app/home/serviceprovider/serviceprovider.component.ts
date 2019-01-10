import { Component, OnInit, Input  } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-serviceprovider',
  templateUrl: './serviceprovider.component.html',
  styleUrls: ['./serviceprovider.component.css']
})
export class ServiceproviderComponent implements OnInit {

  serviceProviders : any;
  @Input() productId : any;
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    setTimeout (() => {
      this.getServiceProvider();
    }, 1000);

  }


  getServiceProvider() {

    const data = localStorage.getItem('data');
    const prsData = JSON.parse(data);
    console.log('dfhdhd'+this.productId);
    if (!this.isEmpty(prsData)) {
      let obs =  this.http.get('http://localhost:8080/api/consumer/product/' + this.productId + '/service-providers',
        {
          headers: new HttpHeaders()
            .set('Authorization', prsData.token)
        });
      obs.subscribe((x) => {
        this.serviceProviders = x;
       // console.log(x);
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
