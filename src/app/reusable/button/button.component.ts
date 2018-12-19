import {Component, Input, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductDetailComponent } from '../../home/product-detail/product-detail.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit  {
  @Input() status: boolean;
  @Input() productId: number;
  url: string = 'http://localhost:8080/api/consumer/product/badge';
  obj = {
    productId: 0,
    badge : false
  };


  isIntrested: boolean;
  constructor(private http: HttpClient, private parent: ProductDetailComponent) {
  }


  toggle(){

    let header = new HttpHeaders();
    let data = localStorage.getItem('data');
    let prsData = JSON.parse(data);
    
    if (this.isIntrested) {
      this.parent.likeBtnStatus = false;
      this.isIntrested = false;
    } else {
      this.isIntrested = true;
      this.parent.likeBtnStatus = true;
    }

    this.obj.badge = !this.status;
    this.obj.productId = this.productId;
    console.log(this.obj);
    let obs = this.http.post(this.url, this.obj,{
      headers: new HttpHeaders().set('Authorization', prsData.token).set('Content-Type', 'application/json'),
  });
    obs.subscribe((x) => {
      console.log(x);
    });
  }

  ngOnInit() {
    console.log('kkkkkk' + this.parent.likeBtnStatus);
    this.isIntrested = this.status;
      console.log(this.productId);
  }


}
