import { Component } from '@angular/core';

import {FormControl, FormGroup} from "@angular/forms";
import {Event} from "@angular/router";
// import { Data } from './convert-page.data-component';

@Component({
  selector: 'app-convert-page',
  templateUrl: './convert-page.component.html',
  styleUrls: ['./convert-page.component.css']
})


export class ConvertPageComponent {
  currencyQuantity = 1;
   endQuantity = 1;
   //     {
   //   currency:'',
   //   description:'',
   //   value:''
   // };


  myDataBases = [
    {"currency": "", "description": "Select currency", "value": ""},
    {"currency": "BGN", "description": "Bulgarian Lev", "value": 1.95583},
    {"currency": "EUR", "description": "Euro", "value": 1.00},
    {"currency": "GBP", "description": "British Pound", "value": 2.34},
  ]

  convert($event: any) {
    // console.log($event.target.value);
   this.currencyQuantity = $event.target.value;
  }

  setValue($event: any) {
    // console.log($event.target.value);
    this.endQuantity = $event.target.value;
  }
}














