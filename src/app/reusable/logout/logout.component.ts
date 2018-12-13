import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {Globals} from '../../globals';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private globals: Globals) { }

  logout() {

    localStorage.clear();
    this.router.navigate(['/']);
    this.globals.hasSession = false;
  }

  ngOnInit() {
  }


}
