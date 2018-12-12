import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor(private http: HttpClient) { }
  @Input() rating: number;
  @Input() itemId: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();

  inputName: string;
  ngOnInit() {
    this.inputName = this.itemId + '_rating';
    this.rating = parseInt(this.rating.toFixed(0));
  }

  isEmpty(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  submitRating(itemId, rating) {
    const data = localStorage.getItem('data');
    const prsData = JSON.parse(data);
    console.log(prsData);
    if (!this.isEmpty(prsData)) {
      let obs =  this.http.post('http://localhost:8080/api/product/rating', {"manualId": itemId, "rating": rating},
      {
        headers: new HttpHeaders()
          .set('Authorization', prsData.token)
      });
      obs.subscribe((x) => {

      });
    } else {
      confirm('Please login to rate this manual');
    }
  }

  onClick(rating: number): void {
    this.submitRating(this.itemId, rating);
    this.rating = parseInt(rating.toFixed(0));
    console.log(rating);
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });
  }

}
