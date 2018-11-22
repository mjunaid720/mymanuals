import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username : String = '';
  constructor(private router: Router) {
      let data = localStorage.getItem('data');
      let prsData = JSON.parse(data);
      this.username = prsData.username;
  }

  logout() {
    console.log('hello world');
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
