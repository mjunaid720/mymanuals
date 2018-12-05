import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})

export class SearchresultComponent implements OnInit {
    url:string='';
    search:string='';
    products:any= [];
   
     constructor(private http:HttpClient,private router: ActivatedRoute) {
       
      }
   
   searchProduct(){
   this.search = this.router.snapshot.paramMap.get("id");
   this.url = "http://localhost:8080/api/product?search="+this.search;
   
  //  this.products = [
  //    {
  //        "id": 1,
  //        "name": "Samsung 4K Smart TV",
  //        "model": "UE55F8000AFXZ",
  //        "images": [
  //            {
  //                "id": 1,
  //                "url": "some url"
  //            },
  //        ],
  //        "manuals": [
  //            {
  //                "id": 1,
  //                "description": "manual description",
  //                "url": "some url"
  //            },
  //        ],
  //        "category": {
  //            "id": 1,
  //            "name": "tv"
  //        }
  //    }
  //  ]
   
   
   
   let obs = this.http.get(this.url);
   obs.subscribe((x)=>{
     this.products = x;
   });

  }

     ngOnInit() {
      this.searchProduct();
     }
}
