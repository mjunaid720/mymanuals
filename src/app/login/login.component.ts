import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { LoginService } from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private http: HttpClient, private loginService: LoginService, private router: Router) {


    }

    title = 'demo';
    error = '';
    user = {
        username : '',
        password : '',
        role : ''
    };
    clickme() {
        if (this.user.username.replace(/\s/g, '') === '' && this.user.password.replace(/\s/g, '') === "" && this.user.role.replace(/\s/g, '') === '') {
            this.error = 'all';
        } else if (this.user.username.replace(/\s/g, '') === '') {
            this.error = 'username';
        } else if(this.user.password.replace(/\s/g, '') === '') {
            this.error = 'password';
        } else if(this.user.role.replace(/\s/g, '') === '') {
            this.error = 'role';
        } else {
            this.error = '';
            //var obs = this.http.get('https://jsonplaceholder.typicode.com/todos/1');
            let obs = this.http.put("http://localhost:8080/api/company/login", this.user);
            obs.subscribe((x:{token:''}) => {
                if(x.hasOwnProperty('token')) {
                    this.error = '';
                    localStorage.setItem('data', JSON.stringify({'token' : x.token, 'username' : this.user.username, 'role' : this.user.role.replace(/\s/g, '')}));
                    if(this.user.role == 'Company'){
                        this.router.navigate(['/company']);
                    } else if (this.user.role == 'Representative'){
                        this.router.navigate(['/representative']);
                    } else if (this.user.role == 'Consumer'){
                        this.router.navigate(['/user']);
                    }

                } else {
                    this.error = 'notfound';
                }
                // if (this.user.username == "ali" && this.user.password == "123") {
                //     localStorage.setItem('token', JSON.stringify(this.user.role));
                //
                // }else if(this.user.username == "junaid" && this.user.password == "123") {
                //
                // }

            }, (error1) => {
                this.error = 'notfound';
            });
        }
    }

    movetosignup(){
        this.router.navigate(['/signup']);
    }

  ngOnInit() {
  }

}
