import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import {Router} from '@angular/router';
import {Globals} from '../../globals';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private globals: Globals) { }

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
          console.log(this.user);
          this.loginService.loginAsCompany(this.user).subscribe((x: {token: ''}) => {
              console.log(x);
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
              console.log(error1);
              this.error = 'notfound';
          });
      }
  }

  ngOnInit() {

  }

}
