import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  isIntrested:boolean =false;
  constructor() { }

  toggle(id){
    if(this.isIntrested)
    this.isIntrested = false;
    else
    this.isIntrested = true;
  }

  ngOnInit() {
  }

}
