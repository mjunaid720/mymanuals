import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import {Router} from '@angular/router';
import {Globals} from '../../globals';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

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
  loader = false;

  clickMe() {
      this.loader = true;
      if (this.user.username.replace(/\s/g, '') === '' && this.user.password.replace(/\s/g, '') === '') {
          this.error = 'all';
        this.loader = false;
      } else if (this.user.username.replace(/\s/g, '') === '') {
          this.error = 'username';
        this.loader = false;
      } else if (this.user.password.replace(/\s/g, '') === '') {
          this.error = 'password';
        this.loader = false;
      }  else {
          this.error = '';
          this.loginService.loginAsCompany(this.user).subscribe((x: {token: ''}) => {
            this.loader = false;
              if (x.hasOwnProperty('token')) {
                  this.error = '';
                  this.globals.hasSession = true;
                  localStorage.setItem('data', JSON.stringify({'token' : x.token, 'username' : this.user.username, 'role' : 'company'}));
                  this.globals.sessionObj = {'token' : x.token, 'username' : this.user.username, 'role' : 'company'};
                  this.router.navigate(['/company']);
              } else {
                  this.error = 'notfound';
              }
          }, (error1) => {
            this.loader = false;
              console.log(error1);
              this.error = 'notfound';
          });
      }
  }

  ngOnInit() {

  }

}
