import { Component, OnInit } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  pdfArray = [];
  category: '';
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
  imageToUpload: any = [];
  fileToUpload: any = [];


  constructor(private http: HttpClient, private domSanitizer: DomSanitizer) {
    this.getListOfCategories();

  }

  ngOnInit() {
  }

  increaseNum() {
    const pdf = {
      'pdfFile' : '',
      'data' : '',
      'description' : ''
    };
    this.pdfArray.push(pdf);
  }

  decNum(i) {
    if (i > -1) {
      this.pdfArray.splice(i, 1);
    }
  }

  dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
  }

  setPdfUrl(data) {
    return new Image(data).src;
  }

  setUrl(data) {
    // let arr = data.split(data);
    var pdf = atob(data.split(',')[1]);
    //const Url1 = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    //window.open(Url1.changingThisBreaksApplicationSecurity, '_blank');
    //this.dataURLtoFile(data.data, data.name);
    var image = new Image()
    image.src = data
    console.log(image);
    window.open(image.src);
  }

  addProduct() {


    const images =  [{
        "name": this.imageToUpload[0].name,
        "type": this.imageToUpload[0].type,
        "data": this.imageToUpload[1]
    }];

    let cat = {
      "id": this.category,
      "name": "phones"
    };

    const manuals =  [{
      "name": this.fileToUpload[0].name,
      "type": this.fileToUpload[0].type,
      "data": this.fileToUpload[1]
    }];

    this.product['images'] = images

    this.product['manuals'] = manuals;



    const scope = this;
    const header = new HttpHeaders();
    const data = localStorage.getItem('data');
    const prsData = JSON.parse(data);
    this.selCategory = this.category;
    delete this.product.category;
    this.product['category'] = cat;
    if (this.product.category == '') {
      this.error = 'please select one category';
    } else {
      header.append('Authorization', prsData.token);
      console.log(this.product);
      // headers = headers.set('Authorization', prsData.token);
      const obs = this.http.post('http://localhost:8080/api/product', this.product,{
        headers: new HttpHeaders().set('Authorization', prsData.token).set('Content-Type', 'application/json'),
      });
      obs.subscribe((x) => {
        console.log('completed');
        this.error = 1;
        // this.product['category'] = this.selCategory;
        scope.getProducts(scope.category);
        // this.setToEmpty();
      });
    }

  }

  readThis(inputValue: any): void {
    let scope = this;
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      scope.imageToUpload[1] = myReader.result;
      // onsole.log(scope.imageToUpload);
    }
    myReader.readAsDataURL(file);
  }

  setPdfByteCode(byteCode, index) {
    // let result = this.pdfArray.filter(obj => {
    //   return obj.b === index;
    // });
    // if (result.length > 0) {
    this.pdfArray[index].data = byteCode;
      // console.log(result);
      // this.pdfArray = result;
   // }
  }

  readThisPdf(inputValue: any, i): void {
    const scope = this;
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      scope.setPdfByteCode(myReader.result, i);
    }
    myReader.readAsDataURL(file);
  }

  imageOnChange(event) {
    // console.log(this.imageToUpload)
    this.imageToUpload[0] = event.target.files[0];
    this.readThis(event.target);
  }

  pdfOnChange(event, i) {
    this.fileToUpload[0] = event.target.files[0];
    this.readThisPdf(event.target, i);
  }

  getProducts(categoryId) {
    const data = localStorage.getItem('data');
    const prsData = JSON.parse(data);
    const obs = this.http.get('http://localhost:8080/api/product?categoryId=' + categoryId);
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
    let scope = this;
    const obs = this.http.get('http://localhost:8080/api/category', {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
    obs.subscribe((x) => {
      this.categories = x;
      const cList = Object.values(x);
      if (cList.length > 0) {
        scope.category = cList[0].id;
        this.getProducts(cList[0].id);
      }
    });
  }

}
