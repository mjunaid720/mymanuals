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
  private featured: any = [];
  constructor(private http: HttpClient, private domSanitizer: DomSanitizer) {
    this.getLatestProducts();
  }

  ngOnInit() {
  }

  isEmpty(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  checkFeaturedImage() {
    console.log(this.productList);
     if (this.productList.hasOwnProperty('featuredProduct')) {
       return true;
     } else {
       return false;
     }
  }

  getLatestProducts() {
    const obs = this.http.get('http://localhost:8080/api/public/products/latest', {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
    obs.subscribe((x) => {
        this.productList = x;
         this.featured =  this.productList.featuredProduct;
        //   console.log(this.featured);
    }


    );

  }

  getProductCategory(categoryId) {

  }
}
