import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import { Globals } from '../../globals';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private translate: TranslateService, private global: Globals) {
    translate.addLangs(['en', 'se']);
    translate.setDefaultLang(global.defaultLang);
  }

  logout() {

    localStorage.clear();
    this.router.navigate(['/']);
    this.global.hasSession = false;
  }

  ngOnInit() {
  }


}
