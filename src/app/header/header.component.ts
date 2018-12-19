import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';
import { Globals } from '../globals';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  param1: String = '';
  displayPage: Number = 0;
  prsData: any;
  hasSession = false;

  glob: any;
  // @Output() myEvent = new EventEmitter();
  constructor(private route: ActivatedRoute, private http: HttpClient, private loginService: LoginService, private router: Router, private globals: Globals, private translate: TranslateService) {
      this.route.queryParams.subscribe(params => {
          this.param1 = params['as'];
      });
      this.glob = globals;
      translate.addLangs(['en', 'se']);
      translate.setDefaultLang(this.glob.defaultLang);
      console.log('in header ', this.glob);
  }

  title = 'demo';
  error = '';
  user = {
      username : '',
      password : '',
      role : ''
  };

  loginAs(l) {
      if (l == 'company') {
         // this.displayPage = 1;
         this.router.navigate(['login/admin']);
      } else if (l == 'representative') {
        this.router.navigate(['login/representative']);
         // this.displayPage = 2;
      } else {
         // this.displayPage = 3;
         this.router.navigate(['login/consumer']);
      }
  }

  isEmpty(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  ngOnInit() {
      this.displayPage = 3;
      const data = localStorage.getItem('data');
      this.prsData = JSON.parse(data);
      console.log(this.prsData);
  }

  setLang(lang) {
    localStorage.setItem('lang', lang);
    this.globals.defaultLang = lang;
    // this.translate.addLangs(['en', 'se']);
    this.translate.setDefaultLang(this.glob.defaultLang);
  }
}
