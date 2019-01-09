import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../login.service';
import {Router} from '@angular/router';
import {Globals} from '../../globals';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-ad-manager',
  templateUrl: './ad-manager.component.html',
  styleUrls: ['./ad-manager.component.css']
})
export class AdManagerComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private globals: Globals, private translate: TranslateService) {
    translate.addLangs(['en', 'se']);
    translate.setDefaultLang(globals.defaultLang);
  }

  title = 'demo';
  error = '';
  user = {
    username : '',
    password : ''
  };

  ngOnInit() {
  }

  clickMe() {
    if (this.user.username.replace(/\s/g, '') === '' && this.user.password.replace(/\s/g, '') === '') {
      this.error = 'all';
    } else if (this.user.username.replace(/\s/g, '') === '') {
      this.error = 'username';
    } else if (this.user.password.replace(/\s/g, '') === '') {
      this.error = 'password';
    }  else {
      this.error = '';
      this.loginService.loginAsAdManager(this.user).subscribe((x: {token: '', username: ''}) => {
        if (x.hasOwnProperty('token')) {
          this.error = '';
          this.globals.hasSession = true;
          localStorage.setItem('data', JSON.stringify({'token' : x.token, 'username' : x.username, 'role' : 'admanager'}));
          this.globals.sessionObj = {'token' : x.token, 'username' : x.username, 'role' : 'admanager'};
          this.router.navigate(['/admanager']);
        } else {
          this.error = 'notfound';
        }
      }, (error1) => {
        this.error = 'notfound';
      });
    }
  }
}
