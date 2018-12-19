import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(private http: HttpClient) { }
  productUrl : any = '';
  products : any = [];

  ngOnInit() {
    this.loadProdudtsWithIntrests();
  }

  loadProdudtsWithIntrests() {
    this.productUrl = 'http://localhost:8080/api/representative/products/selection';
    let scope = this;
    let header = new HttpHeaders();
    let data = localStorage.getItem('data');
    let prsData = JSON.parse(data);
    header.append('Authorization', prsData.token);
    let obs = this.http.get(this.productUrl,{
      headers: new HttpHeaders().set('Authorization', prsData.token).set('Content-Type', 'application/json'),
    });
    obs.subscribe((x) => {
      console.log(x);
      this.products = x;
    });

  }

}
