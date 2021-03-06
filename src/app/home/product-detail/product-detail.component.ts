import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import {TranslateService} from '@ngx-translate/core';
import { Globals } from '../../globals';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @ViewChild('addNewCommentDetail') commentElementRef: ElementRef;
  productId : any;
  proDetail: any = [];
  imageToShow = 0;
  repPer: boolean = false;
  likedBtn: boolean = false;
  likeBtnStatus = false;
  private _album = [];
  ratingClicked: number;
  itemIdRatingClicked: string;
  noteModel = {};
  newCommentText : string = '';

  constructor(private http: HttpClient, private router: ActivatedRoute, private _lightbox: Lightbox, private translate: TranslateService, private global: Globals) {


    let id = router.snapshot.paramMap.get("id");
    this.productId = id;
    this.getProductDetail(id);
    this.checkRepPermission();
    this.checkConsumerPermission();
    // added translate
    translate.addLangs(['en', 'se']);
    translate.setDefaultLang(global.defaultLang);

    // const browserLang = translate.getBrowserLang();
   // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }


  ngOnInit() {
  }

  setUrl(src, caption1, thumb) {
    const caption = 'image';
    let url = src;
    url = './assets/' + url;
    this._album = [];
    this._album.push({
      src: src,
      caption: caption,
      thumb: thumb
  });
    console.log(this._album);
    return this._album;
  }

  open(index: number): void {
    console.log(index);
    // open lightbox
    const data = this.setUrl(this.proDetail.secondaryImages[index].url, 'image', '');
    this._lightbox.open(data, 0);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  isEmpty(obj) {
    for(var key in obj) {
      if(obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  getProductDetail(id) {
    let token = '';
    const data = localStorage.getItem('data');
    const prsData = JSON.parse(data);

    if (!this.isEmpty(prsData)) {
      token = prsData.token;
    }
    // if(prsData.hasOwnProperty('token')){
    //   token = prsData.token;
    // }
    // this.proDetail = data;
    let obs;
    if (token == '' || prsData.role == 'rep' || prsData.role == 'company') {
      obs =  this.http.get('http://localhost:8080/api/public/product/' + id, {
        headers: new HttpHeaders()
          // .set('Authorization', token)
      });
    } else {
      obs =  this.http.get('http://localhost:8080/api/consumer/product/' + id, {
        headers: new HttpHeaders()
          .set('Authorization', token)
      });
    }

    obs.subscribe((x) => {
      this.proDetail = x;
      if(this.proDetail.hasOwnProperty('hasBadge')){
        this.likeBtnStatus = this.proDetail.hasBadge;
      }
    });
  }

  changeImage(index) {
    this.imageToShow = index;
  }

  checkRepPermission() {

    const data = localStorage.getItem('data');
    const prsData = JSON.parse(data);
    console.log(prsData);
    if (!this.isEmpty(prsData)) {
      if(prsData.role == 'rep') {
        this.repPer = true;
      }
    }
  }

  deleteImage(iId) {
    var aa = confirm("Are you sure to delete!");
    if (aa) {
      const data = localStorage.getItem('data');
      const prsData = JSON.parse(data);
      console.log(prsData);
      if (!this.isEmpty(prsData)) {
        if(prsData.role == 'rep') {
          let obs =  this.http.delete('http://localhost:8080/api/product/image/' +iId, {
            headers: new HttpHeaders().set('Authorization', prsData.token)
          });
          obs.subscribe((x) => {
            this.proDetail = x;
          });
        }
      }
    }
  }

  removeManual(mId) {
     var aa = confirm("Are you sure !");
     if (aa) {
       const data = localStorage.getItem('data');
       const prsData = JSON.parse(data);
       console.log(prsData);
       if (!this.isEmpty(prsData)) {
         if(prsData.role == 'rep') {
           let obs =  this.http.delete('http://localhost:8080/api/product/manual/' + mId, {
             headers: new HttpHeaders().set('Authorization', prsData.token)
           });
           obs.subscribe((x) => {
             this.proDetail = x;
           });
         }
       }
     }
  }

  ratingComponentClick(event) {
    console.log(this.proDetail.manuals);

    const item = [this.proDetail.manuals].find(((i: any) => i.id === event.id));
    console.log(item);
    if (!!item) {
      item.rating = event.rating;
      this.ratingClicked = event.rating;
      this.itemIdRatingClicked = item.company;
    }
  }



  checkConsumerPermission() {
    const data = localStorage.getItem('data');
    const prsData = JSON.parse(data);
    if (!this.isEmpty(prsData)) {
      if(prsData.role == 'consumer') {
        this.likedBtn = true;
      }
    }
  }

  strip(html)
  {
    // var tmp = document.createElement("DIV");
    // tmp.innerHTML = html;
    return html.replace(/<(?:.|\n)*?>/gm, '');
  }

  addNote(model:any) {
    console.log(model);
    let scope = this;
    this.noteModel = {
      "manualId": model.id,
      "note": model.note

    }
    const data = localStorage.getItem('data');
    const prsData = JSON.parse(data);
    if (!this.isEmpty(prsData)) {
      let obs =  this.http.post('http://localhost:8080/api/consumer/product/manual/note', this.noteModel,{
        headers: new HttpHeaders().set('Authorization', prsData.token)
      });
      obs.subscribe((x) => {
        scope.getProductDetail(scope.productId);
      });
    }
  }

  addCount(manual) {
    // here we add manual
    let obs =  this.http.get('http://localhost:8080/api/public/product/manual/view/' + manual.id);
    obs.subscribe((x) => {

    });
  }

  addNewComment(productId) {
    const scope = this;
    const data = localStorage.getItem('data');
    const prsData = JSON.parse(data);
    const commentData = {
      text: this.newCommentText,
      productId: productId
    };
    const obs =  this.http.post('http://localhost:8080/api/consumer/product/comment', commentData,{
      headers: new HttpHeaders().set('Authorization', prsData.token)
    });
    obs.subscribe((x) => {
      scope.proDetail = x;
      scope.commentElementRef.nativeElement.focus();
      scope.newCommentText = '';
    });
  }
}
