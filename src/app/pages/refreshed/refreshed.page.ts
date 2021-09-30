import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refreshed',
  templateUrl: './refreshed.page.html',
  styleUrls: ['./refreshed.page.scss'],
})
export class RefreshedPage implements OnInit {

  items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  doRefresh( event ){
    setTimeout(() => {
      this.items = Array(20);
      event.target.complete();
    }, 1500);
    
  }

}
