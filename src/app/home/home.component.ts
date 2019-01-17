import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private domSanitizer: DomSanitizer, private translate: TranslateService, private globals: Globals) {
    translate.addLangs(['en', 'se']);
    translate.setDefaultLang(globals.defaultLang);
  }

  category: any = {};
  categories: any = [];
  products: any = [];
  productUrl: any = '';
  pdf: any = '';
  ngOnInit() {
    this.loadCategories();
  }

  loadCategories(){
    let obs =  this.http.get('http://localhost:8080/api/public/categories');
    obs.subscribe((x)=> {
      console.log(x);
      this.categories = x;
    });
  }

  setUrl(data) {
    // let arr = data.split(data);
    var pdf = atob(data.split(',')[1]);
    //const Url1 = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    //window.open(Url1.changingThisBreaksApplicationSecurity, '_blank');
    //this.dataURLtoFile(data.data, data.name);
    var image = new Image();
    image.src = data;
    console.log(image);
    window.open(image.src);
  }


  loadProdudts(event){

    this.productUrl = 'http://localhost:8080/api/public/products/category/' + this.category;
    let obs = this.http.get(this.productUrl);
    obs.subscribe((x) => {
      console.log(x);
      this.products = x;
    });

  }

  loadProdudtsWithIntrests(){
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
