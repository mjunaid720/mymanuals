import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    user = {
        name : '',
        username : '',
        password : '',
      email: ''
    };
    message: String = '';

    constructor( private  http: HttpClient) { }

    clickme() {
        if(this.user.name == '' || this.user.username == '' || this.user.password == '' || this.user.email == '') {
            this.message = 'error';
        } else {
            let obs = this.http.post('http://localhost:8080/api/consumer/signup', this.user);
            obs.subscribe((x) => {
                this.message = 'success';
                this.setToEmpty();
            });
        }
    }

    setToEmpty() {
      this.user = {
        name : '',
        username : '',
        password : '',
        email: ''
      };
    }

    ngOnInit() {
    }
}
