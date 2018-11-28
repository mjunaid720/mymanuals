import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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

    loginAs(l) {
        if (l == 'company') {
            this.displayPage = 1;
        } else if (l == 'representative') {
            this.displayPage = 2;
        } else {
            this.displayPage = 3;
        }
    }

    movetosignup(){
        this.router.navigate(['/signup']);
    }

    ngOnInit() {
        this.displayPage = 3;
    }

}
