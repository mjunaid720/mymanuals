import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  url:string = '';
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }
   
  logout(){
    let obs = this.http.get(this.url);
    obs.subscribe((x) =>{
//this.router.navigate('hh');
    });
  }

}
