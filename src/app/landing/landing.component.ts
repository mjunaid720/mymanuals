import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  private productList: any;

  constructor(private http: HttpClient, private domSanitizer: DomSanitizer) {
    this.getLatestProducts();
  }

  ngOnInit() {
  }

  getLatestProducts() {
    const obs = this.http.get('http://localhost:8080/api/product/latest', {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
    obs.subscribe((products) =>
    this.productList = products);
  }

  getProductCategory(categoryId) {

  }
}
