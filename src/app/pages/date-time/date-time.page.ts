import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();

  customYearsValue = [2025, 2024, 2023, 2022, 2021, 2020];

  customPickerOptions = {
    buttons: [
      {
        text: 'hola',
        handler: (event) => {
          console.log(event);
          
        }
      }, {
        text: 'mundo',
        handler: () => {
          console.log("log");
          
        }
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  cambioFecha( event ){
    console.log(event);
    console.log( new Date( event.detail.value ) );
    
    
  }

}
