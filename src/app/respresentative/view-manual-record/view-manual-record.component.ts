import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-manual-record',
  templateUrl: './view-manual-record.component.html',
  styleUrls: ['./view-manual-record.component.css']
})
export class ViewManualRecordComponent implements OnInit {

  getManualRecord: any = [];
  constructor(private http: HttpClient, private router: ActivatedRoute) {
    this.getManualRecord = this.router.snapshot.paramMap.get("id");
    this.loadProdudtsWithIntrests(this.getManualRecord);
    console.log(this.getManualRecord);
  }
  productUrl : any = '';
  manuals : any = [];

  ngOnInit() {

  }

  loadProdudtsWithIntrests(id) {
    this.productUrl = 'http://localhost:8080/api/public/product/'+id;
    let scope = this;
    let header = new HttpHeaders();
    let data = localStorage.getItem('data');
    let prsData = JSON.parse(data);
    header.append('Authorization', prsData.token);
    let obs = this.http.get(this.productUrl);
    obs.subscribe((x:{manuals:[]}) => {
      this.manuals = x.manuals;
    });

  }


}
