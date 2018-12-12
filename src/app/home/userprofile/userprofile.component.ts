import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  isSubscribed: any;
  userProfileData: any;

  constructor(public http:HttpClient) { }


  ngOnInit() {
    this.getUserProfileData();
  }

  getUserProfileData(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(localStorage["data"]).token
      })
    }
    this.http.get("http://localhost:8080/api/consumer/profile",  httpOptions)
      .subscribe((data: any) => this.userProfileData ={
        subscribed: data['subscription']
      })
    var that = this;
    setInterval(function () {
      that.isSubscribed = that.userProfileData.subscribed;
    },1000);
  }


  subscribed() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(localStorage["data"]).token
      })
    }
    if (this.isSubscribed === true) {
      this.http.put("http://localhost:8080/api/consumer/subscription",{"subscription": true}, httpOptions).subscribe();
      this.userProfileData.subscribed = true;
    } else {
      this.http.put("http://localhost:8080/api/consumer/subscription",{"subscription": false}, httpOptions).subscribe();
      this.userProfileData.subscribed = false;
    }
  }
}
