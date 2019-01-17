import { Component, OnInit, Input  } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import { Globals } from '../../globals';

@Component({
  selector: 'app-serviceprovider',
  templateUrl: './serviceprovider.component.html',
  styleUrls: ['./serviceprovider.component.css']
})
export class ServiceproviderComponent implements OnInit {

  serviceProviders : any;
  @Input() productId : any;
  constructor(private http: HttpClient, private translate: TranslateService, private global: Globals) {
    translate.addLangs(['en', 'se']);
    translate.setDefaultLang(global.defaultLang);
  }

  ngOnInit() {
    setTimeout (() => {
      this.getServiceProvider();
    }, 1000);

  }


  getServiceProvider() {
    const data = localStorage.getItem('data');
    const prsData = JSON.parse(data);
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
      // confirm('Please login first.');
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
