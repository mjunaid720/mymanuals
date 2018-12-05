import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  url:string ='';
  obj={
    productId:0,
    badge : false
  };
  isIntrested:boolean =false;
  constructor(private http: HttpClient) { }
  
  toggle(id){

    let header = new HttpHeaders();
    let data = localStorage.getItem('data');
    let prsData = JSON.parse(data);
    
    if(this.isIntrested)
    this.isIntrested = false;
    else
    this.isIntrested = true;

    this.obj.badge = this.isIntrested;
    this.obj.productId = id;
    
    let obs = this.http.post(this.url, this.obj,{
      headers: new HttpHeaders().set('Authorization', prsData.token).set('Content-Type', 'application/json'),
  });
  }

  ngOnInit() {
  }

}
