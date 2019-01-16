import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  constructor(private http: HttpClient) { }

  stats = {};
  ngOnInit() {
    this.getStats();
  }

  isEmpty(obj) {
    for(var key in obj) {
      if(obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  getStats() {
    const data = localStorage.getItem('data');
    const prsData = JSON.parse(data);
    if (!this.isEmpty(prsData)) {
      let obs =  this.http.get('http://localhost:8080/api/system-admin/count/companies-products',{
        headers: new HttpHeaders().set('Authorization', prsData.token)
      });
      obs.subscribe((x) => {
       this.stats = x;
      });
  }
}
}
