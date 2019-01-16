import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';
import { Globals } from 'src/app/globals';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sys-admin',
  templateUrl: './sys-admin.component.html',
  styleUrls: ['./sys-admin.component.css']
})
export class SysAdminComponent implements OnInit {


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

    clickMe() {
        if (this.user.username.replace(/\s/g, '') === '' && this.user.password.replace(/\s/g, '') === '') {
            this.error = 'all';
        } else if (this.user.username.replace(/\s/g, '') === '') {
            this.error = 'username';
        } else if (this.user.password.replace(/\s/g, '') === '') {
            this.error = 'password';
        }  else {
            this.error = '';

            const obs = this.loginService.loginAsSysAdmin(this.user);
            obs.subscribe((x: {token: ''}) => {
                if (x.hasOwnProperty('token')) {
                    this.error = '';
                    console.log('now logged in');
                    this.globals.hasSession = true;
                    localStorage.setItem('data', JSON.stringify({'token' : x.token, 'username' : this.user.username, 'role' : 'sysAdmin'}));
                  this.globals.sessionObj = {'token' : x.token, 'username' : this.user.username, 'role' : 'sysAdmin'};
                  this.router.navigate(['/sysAdmin']);
                } else {
                    this.error = 'notfound';
                }
            }, (error1) => {
                this.error = 'notfound';
            });
        }
    }

  ngOnInit() {
  }

}
