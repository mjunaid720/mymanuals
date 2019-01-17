import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  productUrl : any = '';
  products : any = [];
  proUrl = "";
  ngOnInit() {
    this.loadProdudts();
  }

  isEmpty(obj) {
    for(var key in obj) {
      if(obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  loadProdudts() {
    this.productUrl = 'http://localhost:8080/api/system-admin/products';
    let scope = this;
    let header = new HttpHeaders();
    let data = localStorage.getItem('data');
    let prsData = JSON.parse(data);
    header.append('Authorization', prsData.token);
    let obs = this.http.get(this.productUrl,{
      headers: new HttpHeaders().set('Authorization', prsData.token).set('Content-Type', 'application/json'),
    });
    obs.subscribe((x) => {
      this.products = x;
      console.log(x);
    });

  }


  makeFeature(id){
    console.log(id);
    var aa = confirm("Are you sure you want to make this product featured.");
    if (aa){
      this.proUrl = "http://localhost:8080/api/system-admin/featured-product/"+id;
      const data = localStorage.getItem('data');
      const prsData = JSON.parse(data);
      if (!this.isEmpty(prsData)) {
        let obs =  this.http.post(this.proUrl, {},{
          headers: new HttpHeaders().set('Authorization', prsData.token)
        });
        obs.subscribe((x) => {
          alert("Successfully done.");
        });
      }
    }

  }
}
