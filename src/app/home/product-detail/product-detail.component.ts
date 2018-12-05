import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private http: HttpClient, router: ActivatedRoute) {
    let id = router.snapshot.paramMap.get("id");
    this.getProductDetail(id);
    this.checkRepPermission();
    this.checkConsumerPermission();
  }

  proDetail: any = [];
  imageToShow = 0;
  repPer: boolean = false;
  likedBtn: boolean = false;

  ngOnInit() {
  }

  getProductDetail(id) {
    let data =  {
      "id": 1,
      "name": "Dell - Inspiron 2-in-1 13.3",
      "model": "UE55F8000AFXZ",
      "description": "Dell - Inspiron 2-in-1 13.3\" Touch-Screen Laptop - Intel Core i5 - 8GB Memory - 256GB Solid State Drive - Era Gray",
      "images": [
        {
          "id": 1,
          "url": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6083/6083539_sd.jpg;maxHeight=400;maxWidth=500"
        },
        {
          "id": 2,
          "url": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Lenovo_G500s_laptop-2905.jpg"
        },
        {
          "id": 3,
          "url": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6083/6083539_sd.jpg;maxHeight=400;maxWidth=500"
        },
        {
          "id": 4,
          "url": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Lenovo_G500s_laptop-2905.jpg"
        }
      ],
      "manuals": [
        {
          "id": 1,
          "description": "manual description 1",
          "url": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6083/6083539_sd.jpg;maxHeight=400;maxWidth=500"
        },
        {
          "id": 2,
          "description": "manual description 2",
          "url": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6083/6083539_sd.jpg;maxHeight=400;maxWidth=500"
        },
        {
          "id": 3,
          "description": "manual description 3",
          "url": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6083/6083539_sd.jpg;maxHeight=400;maxWidth=500"
        }
      ],
      "category": {
        "id": 1,
          "name": "tv"
      }
    };
    // this.proDetail = data;
    let obs =  this.http.get('http://localhost:8080/api/product/'+id, {
      headers: new HttpHeaders().set('Authorization', '')
    });
    obs.subscribe((x) => {
      this.proDetail = x;
    });
  }

  changeImage(index) {
    this.imageToShow = index;
  }

  checkRepPermission() {

    const data = localStorage.getItem('data');
    const prsData = JSON.parse(data);
    console.log(prsData);
    if(prsData.hasOwnProperty('role')){
      if(prsData.role == 'rep') {
        this.repPer = true;
      }
    }
  }

  removeManual(mId) {
    // check if user is with role representative
    console.log(mId);
    // let obs =  this.http.get('http://localhost:8080/api/product/'+id);
    // obs.subscribe((x) => {
    //   console.log(x);
    //   this.proDetail = x;
    // });
    const data = localStorage.getItem('data');
    const prsData = JSON.parse(data);
    console.log(prsData);
    if(prsData.hasOwnProperty('role')){
      if(prsData.role == 'rep') {
        console.log('you have permission to delete');
      }
    }
  }



  checkConsumerPermission() {
    const data = localStorage.getItem('data');
    const prsData = JSON.parse(data);
    if(prsData.hasOwnProperty('role')){
      if(prsData.role == 'consumer') {
        this.likedBtn = true;
      }
    }
  }

}
