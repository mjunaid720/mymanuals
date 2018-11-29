import { Component, OnInit } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: any = {
    name : '',
    model : '',
    category : '',
    images : [],
    pdfs : []
  };
  productList: any;
  categories: any;
  selCategory: any = '';
  error: any = '';
  imageToUpload: any;
  fileToUpload: any;

  constructor(private http: HttpClient) {
    this.getListOfCategories();
    // this.getProducts();
  }

  ngOnInit() {
  }

  addProduct() {
    console.log(this.product);
    const scope = this;
    const header = new HttpHeaders();
    const data = localStorage.getItem('data');
    const prsData = JSON.parse(data);
    this.selCategory = this.product.category;
    delete this.product.category;
    if (this.product.category == '') {
      this.error = 'please select one category';
    } else {
      console.log(prsData);
      header.append('Authorization', prsData.token);


      // headers = headers.set('Authorization', prsData.token);
      const obs = this.http.post('http://localhost:8080/api/product', this.product,{
        headers: new HttpHeaders().set('Authorization', prsData.token).set('Content-Type', 'application/json'),
      });
      obs.subscribe((x) => {
        scope.getProducts();
        this.setToEmpty();
      });
    }

  }

  imageOnChange(event) {
    this.imageToUpload = event.target.files[0];
    console.log(this.imageToUpload);
  }

  pdfOnChange(event) {
    this.fileToUpload = event.target.files[0];
  }

  getProducts() {
    const data = localStorage.getItem('data');
    const prsData = JSON.parse(data);
    const obs = this.http.get('http://localhost:8080/api/product?categoryId=' + this.selCategory, {
      headers: new HttpHeaders().set('Authorization', prsData.token).set('Content-Type', 'application/json'),
    });
    obs.subscribe((x) => {
      this.productList = x;
      console.log(this.productList);
    });
  }

  setToEmpty() {
    this.product = {
      name: '',
      model: ''
    };
  }

  getListOfCategories() {
    // const data = localStorage.getItem('data');
    // const prsData = JSON.parse(data);
    const obs = this.http.get('http://localhost:8080/api/category', {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
    obs.subscribe((x) => {
      this.categories = x;
      const cList = Object.values(x);
      if (cList.length > 0)
        this.product.category = cList[0].id;
    });
  }

}
