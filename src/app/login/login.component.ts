import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private http: HttpClient, private loginService: LoginService) {


    }

    title = 'demo';
    error = '';
    user: object = {
        username : '',
        password : ''
    };
    clickme() {
        console.log(this.user);
        if (this.user.username.replace(/\s/g, '') == '' && this.user.password.replace(/\s/g, '') == "") {
            this.error = 'all';
        } else if (this.user.username.replace(/\s/g, '') == '') {
            this.error = 'username';
        } else if(this.user.password.replace(/\s/g, '') == '') {
            this.error = 'password';
        } else {
            this.error = '';
            //var obs = this.http.get('https://jsonplaceholder.typicode.com/todos/1');
            let obs = this.http.post("http://192.168.1.52:6254/api/values", this.user);
            obs.subscribe((x) => console.log(x));
        }
    }

  ngOnInit() {
  }

}
