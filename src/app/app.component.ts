import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';
import { Globals} from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mymanual';
  constructor(private gloals: Globals) {
    let header = new HttpHeaders();
    let data = localStorage.getItem('data');
    let prsData = JSON.parse(data);
    if(this.isEmpty(prsData)) {
      this.gloals.hasSession = false;
      this.gloals.sessionObj = {};
    }else{
      this.gloals.hasSession = true;
      this.gloals.sessionObj = prsData;
    }
  }

  isEmpty(obj) {
    for(var key in obj) {
      if(obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  callMethod(event) {
      console.log('jvefvd');
      console.log(event);
  }
}
