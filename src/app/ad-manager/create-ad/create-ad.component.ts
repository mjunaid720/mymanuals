import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css']
})
export class CreateAdComponent implements OnInit {

  constructor(private http: HttpClient, private domSanitizer: DomSanitizer) {
    this.getCreatedAds();
  }

  primaryImage: any = '';
  cAdd: any = {
    name: '',
    primaryImage: ''
  };
  error = 0;
  adList : any;

  ngOnInit() {
  }

  featureImgByteCode(inputValue: any): void {
    const scope = this;
    const file: File = inputValue;
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      scope.primaryImage =  { 'data' : myReader.result};
    }
    myReader.readAsDataURL(file);
  }

  featureImageOnChange(event) {
    const scope = this;
    Array.from(event.target.files).forEach(function (child) {
      scope.featureImgByteCode(child);
    });
  }

  isEmpty(obj) {
    for(var key in obj) {
      if(obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  createAdd() {
     const cAdd = {
       image: this.primaryImage,
       title: this.cAdd.name
     };
    const scope = this;
    const data = localStorage.getItem('data');
    const prsData = JSON.parse(data);
    console.log(prsData);
    if (this.cAdd['categoryId'] == '') {
      this.error = 2;
    } else if (this.isEmpty((this.cAdd['primaryImage']))) {
      this.error = 2;
    } else if (this.cAdd['name'] == '' || this.cAdd['model'] == '') {
      this.error = 2;
    } else {
      const obs = this.http.post('http://localhost:8080/api/ad-agent/advertisement', cAdd,{
        headers: new HttpHeaders().set('Authorization', prsData.token).set('Content-Type', 'application/json'),
      });
      obs.subscribe((x) => {
        scope.error = 1;
        scope.getCreatedAds();
        scope.setToEmpty();
      }, error1 => {
        console.log(error1);
      });
    }
  }

  getCreatedAds() {
    // const data = localStorage.getItem('data');
    // const prsData = JSON.parse(data);
    const scope = this;
    const data = localStorage.getItem('data');
    const prsData = JSON.parse(data);
    const obs = this.http.get('http://localhost:8080/api/ad-agent/advertisements', {
      headers: new HttpHeaders().set('Authorization', prsData.token).set('Content-Type', 'application/json'),
    });
    obs.subscribe((x) => {
      scope.adList = x;
    });
  }

  setToEmpty() {
    this.cAdd['name'] = '';
    this.cAdd['primaryImage'] = '';
  }
}
