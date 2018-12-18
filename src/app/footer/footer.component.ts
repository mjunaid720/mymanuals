import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Globals } from '../globals';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private translate: TranslateService, private globals: Globals) {
    const lang = globals.defaultLang;
    translate.addLangs(['en', 'se']);
    translate.setDefaultLang(lang);
  }

  ngOnInit() {

  }

}
