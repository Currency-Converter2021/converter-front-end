import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
// import { Data } from './convert-page.data-component';

@Component({
  selector: 'app-convert-page',
  templateUrl: './convert-page.component.html',
  styleUrls: ['./convert-page.component.css']
})

export class ConvertPageComponent  {
  selectCurrency = '';

  selectChangeHandler(event: any){
     this.selectCurrency = event.target.value;
  }
}
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













