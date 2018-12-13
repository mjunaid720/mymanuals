import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';
import {Globals} from '../globals';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  param1: String = '';
  displayPage: Number = 0;
  prsData:any;
  hasSession = false;

  glob: any;
  // @Output() myEvent = new EventEmitter();
  constructor(private route: ActivatedRoute, private http: HttpClient, private loginService: LoginService, private router: Router, private globals: Globals) {
      this.route.queryParams.subscribe(params => {
          this.param1 = params['as'];
      });
      this.glob = globals;
      console.log('header value');
      console.log(globals.hasSession);
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

    console.log('testing');
      this.displayPage = 3;
      const data = localStorage.getItem('data');
      this.prsData = JSON.parse(data);
      console.log(this.prsData);
  }
}
