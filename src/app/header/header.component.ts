import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  param1: String = '';
  displayPage: Number = 0;
  constructor(private route: ActivatedRoute, private http: HttpClient, private loginService: LoginService, private router: Router) {
      this.route.queryParams.subscribe(params => {
          this.param1 = params['as'];
      });

  }

  title = 'demo';
  error = '';
  user = {
      username : '',
      password : '',
      role : ''
  };

  loggedOut: boolean;
  
  loginAs(l) {
      if (l == 'company') {
          this.displayPage = 1;
      } else if (l == 'representative') {
          this.displayPage = 2;
      } else {
          this.displayPage = 3;
      }
  }

  ngOnInit() {
      this.displayPage = 3;
      if (localStorage.getItem('data')) {
        this.loggedOut = false;
      } else {
        this.loggedOut = true;
      }
  }


  navigateUserProfile() {
    this.router.navigateByUrl('/home/userprofile');
  }
}
