import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private domSanitizer: DomSanitizer) { }

  category: any = {};
  categories: any = [];
  products: any = [];
  productUrl: any = '';
  pdf: any = '';
  ngOnInit() {
    this.loadCategories();
  }

  loadCategories(){
    let obs =  this.http.get('http://localhost:8080/api/category');
    obs.subscribe((x)=> {
      console.log(x);
      this.categories = x;
    });
  }

  setUrl(url) {
    const Url = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    window.open(Url.changingThisBreaksApplicationSecurity, "_blank");
  }


  loadProdudts(){

    this.productUrl = 'http://localhost:8080/api/product?categoryId=' + this.category;
    let obs = this.http.get(this.productUrl);
    obs.subscribe((x) => {
      console.log(x);
      this.products = x;
    });

  }

}
