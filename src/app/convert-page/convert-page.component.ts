import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
// import { Data } from './convert-page.data-component';

@Component({
  selector: 'app-convert-page',
  templateUrl: './convert-page.component.html',
  styleUrls: ['./convert-page.component.css']
})


export class ConvertPageComponent {
  selectCurrency = '';

  myDataBases = [
    {"currency": "", "description": "Select currency", "value": ""},
    {"currency": "BGN", "description": "Bulgarian Lev", "value": 1.95583},
    {"currency": "EUR", "description": "Euro", "value": 1.00},
    {"currency": "GBP", "description": "British Pound", "value": 2.34},
  ]


  constructor() {

  }
}
// ------------------------------------------------------------------------

// ------------------------------------------------------------
// export class ConvertPageComponent implements OnInit {
//   dates :Data[];
//
//   ngInit()
//   {
//     this.dates = [
//       {Id:1,Currency:'BGN - Bulgarian Lev'},
//       {Id:2,Currency:'EUR - Euro'},
//       {Id:3,Currency:'GBP - British Pound'},
//     ];
//   }
//
//
// }

// public jsonData = {
//   'id': 1,
//   'currency': 'BGN',
//   'dddd': 'dddd'
// }

// public arrData = [
//   {'id':1,'currency':'BGN - Bulgarian Lev'},
//   {'id':2,'currency':'EUR - Euro'},
//   {'id':3,'currency':'GBP - British Pound'},
// ]
//     selectChangeHandler(event: any){
//    this.selectCurrency = event.target.value;
// }



//   public data =
//        {Id:1,Currency:'BGN - Bulgarian Lev'},
//        {Id:2,Currency:'EUR - Euro'},
//       {Id:3,Currency:'GBP - British Pound'},
// }













