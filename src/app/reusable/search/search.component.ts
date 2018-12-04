import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 url:string='';
 search:string='';
  constructor(private http:HttpClient) {

   }
  searchProduct(event:any){
console.log(event.target.value);
this.search = event.target.value;
this.url = "http://localhost:8080/api/product?search="+this.search;
let obs = this.http.get(this.url);
obs.subscribe((x)=>{
  console.log(x);
})
  }
  ngOnInit() {
  }

}
