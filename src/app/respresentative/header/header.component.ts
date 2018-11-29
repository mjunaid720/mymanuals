import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
    let data = localStorage.getItem('data');
    let prsData = JSON.parse(data);
    this.username = prsData.username;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
