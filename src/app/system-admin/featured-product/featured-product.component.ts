import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.css']
})
export class FeaturedProductComponent implements OnInit {

  constructor(private http: HttpClient) { }
  productUrl : any = '';
  pro : any = [];
  ngOnInit() {
    this.loadFeaturedProdudts();
  }

  loadFeaturedProdudts() {
    this.productUrl = 'http://localhost:8080/api/system-admin/featured-product';
    let scope = this;
    let header = new HttpHeaders();
    let data = localStorage.getItem('data');
    let prsData = JSON.parse(data);
    header.append('Authorization', prsData.token);
    let obs = this.http.get(this.productUrl,{
      headers: new HttpHeaders().set('Authorization', prsData.token).set('Content-Type', 'application/json'),
    });
    obs.subscribe((x) => {
      this.pro = x;
      console.log(x);
    });

  }

}
