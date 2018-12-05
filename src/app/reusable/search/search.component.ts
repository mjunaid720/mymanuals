import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 url:string='';
 search:string='';

  constructor(private router: Router) {

   }

searchProduct(){
this.router.navigate(['/result/search/'+this.search]);
}

  ngOnInit() {
  }

}
