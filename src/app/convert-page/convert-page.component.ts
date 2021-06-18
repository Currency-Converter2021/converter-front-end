import {Component, DoCheck, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Event} from "@angular/router";
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-convert-page',
    templateUrl: './convert-page.component.html',
    styleUrls: ['./convert-page.component.css']
})

export class ConvertPageComponent implements OnInit {
    currencyQuantity: number = 1;
    startCurrency: string = 'Select Currency';
    endCurrency: string = 'Select Currency';
    rate: number = 1
    result: number = 0;

    constructor(private http: HttpClient) {

    }

    checkResult() {
        this.result = this.rate * this.currencyQuantity;
        console.log(this.result)
    }

    ngOnInit() {
        this.getElements();
    }

    getElements() {
        if (this.startCurrency !== 'Select Currency' && this.endCurrency !== 'Select Currency') {
            this.http.get<any>
            (`http://localhost:8000/currency-exchange-rate/?from=${this.startCurrency}&to=${this.endCurrency}`)
                .subscribe(data => {
                    this.rate = data.exchangeRate;
                    this.checkResult();
                    console.log(this.rate);
                })
        }
    }

    myDataBases = [
        {"currency": "Select Currency"},
        {"currency": "EUR"},
        {"currency": "AED"},
        {"currency": "AFN"},
        {"currency": "ALL"},
        {"currency": "AMD"},
        {"currency": "ANG"},
        {"currency": "AOA"},
        {"currency": "ARS"},
        {"currency": "AUD"},
        {"currency": "AWG"},
        {"currency": "AZN"},
        {"currency": "BAM"},
        {"currency": "BBD"},
        {"currency": "BDT"},
        {"currency": "BGN"},
        {"currency": "BHD"},
        {"currency": "BIF"},
        {"currency": "BMD"},
        {"currency": "BND"},
        {"currency": "BOB"},
        {"currency": "BRL"},
        {"currency": "BSD"},
        {"currency": "BTN"},
        {"currency": "BWP"},
        {"currency": "BYN"},
        {"currency": "BZD"},
        {"currency": "CAD"},
        {"currency": "CDF"},
        {"currency": "CHF"},
        {"currency": "CLP"},
        {"currency": "CNY"},
        {"currency": "COP"},
        {"currency": "CRC"},
        {"currency": "CUC"},
        {"currency": "CUP"},
        {"currency": "CVE"},
        {"currency": "CZK"},
        {"currency": "DJF"},
        {"currency": "DKK"},
        {"currency": "DOP"},
        {"currency": "DZD"},
        {"currency": "EGP"},
        {"currency": "ERN"},
        {"currency": "ETB"},
        {"currency": "FJD"},
        {"currency": "FKP"},
        {"currency": "FOK"},
        {"currency": "GBP"},
        {"currency": "GEL"},
        {"currency": "GGP"},
        {"currency": "GHS"},
        {"currency": "GIP"},
        {"currency": "GMD"},
        {"currency": "GNF"},
        {"currency": "GTQ"},
        {"currency": "GYD"},
        {"currency": "HKD"},
        {"currency": "HNL"},
        {"currency": "HRK"},
        {"currency": "HTG"},
        {"currency": "HUF"},
        {"currency": "IDR"},
        {"currency": "ILS"},
        {"currency": "IMP"},
        {"currency": "INR"},
        {"currency": "IQD"},
        {"currency": "IRR"},
        {"currency": "ISK"},
        {"currency": "JMD"},
        {"currency": "JOD"},
        {"currency": "JPY"},
        {"currency": "KES"},
        {"currency": "KGS"},
        {"currency": "KHR"},
        {"currency": "KID"},
        {"currency": "KMF"},
        {"currency": "KRW"},
        {"currency": "KWD"},
        {"currency": "KYD"},
        {"currency": "KZT"},
        {"currency": "LAK"},
        {"currency": "LBP"},
        {"currency": "LKR"},
        {"currency": "LRD"},
        {"currency": "LSL"},
        {"currency": "LYD"},
        {"currency": "MAD"},
        {"currency": "MDL"},
        {"currency": "MGA"},
        {"currency": "MKD"},
        {"currency": "MMK"},
        {"currency": "MNT"},
        {"currency": "MOP"},
        {"currency": "MRU"},
        {"currency": "MUR"},
        {"currency": "MVR"},
        {"currency": "MWK"},
        {"currency": "MXN"},
        {"currency": "MYR"},
        {"currency": "MZN"},
        {"currency": "NAD"},
        {"currency": "NGN"},
        {"currency": "NIO"},
        {"currency": "NOK"},
        {"currency": "NPR"},
        {"currency": "NZD"},
        {"currency": "OMR"},
        {"currency": "PAB"},
        {"currency": "PEN"},
        {"currency": "PGK"},
        {"currency": "PHP"},
        {"currency": "PKR"},
        {"currency": "PLN"},
        {"currency": "PYG"},
        {"currency": "QAR"},
        {"currency": "RON"},
        {"currency": "RSD"},
        {"currency": "RUB"},
        {"currency": "RWF"},
        {"currency": "SAR"},
        {"currency": "SBD"},
        {"currency": "SCR"},
        {"currency": "SDG"},
        {"currency": "SEK"},
        {"currency": "SGD"},
        {"currency": "SHP"},
        {"currency": "SLL"},
        {"currency": "SOS"},
        {"currency": "SRD"},
        {"currency": "SSP"},
        {"currency": "STN"},
        {"currency": "SYP"},
        {"currency": "SZL"},
        {"currency": "THB"},
        {"currency": "TJS"},
        {"currency": "TMT"},
        {"currency": "TND"},
        {"currency": "TOP"},
        {"currency": "TRY"},
        {"currency": "TTD"},
        {"currency": "TVD"},
        {"currency": "TWD"},
        {"currency": "TZS"},
        {"currency": "UAH"},
        {"currency": "UGX"},
        {"currency": "USD"},
        {"currency": "UYU"},
        {"currency": "UZS"},
        {"currency": "VES"},
        {"currency": "VND"},
        {"currency": "VUV"},
        {"currency": "WST"},
        {"currency": "XAF"},
        {"currency": "XCD"},
        {"currency": "XDR"},
        {"currency": "XOF"},
        {"currency": "XPF"},
        {"currency": "YER"},
        {"currency": "ZAR"},
        {"currency": "ZMW"},
    ]

    convert($event: any) {
        // console.log($event.target.value);
        this.currencyQuantity = $event.target.value;
        this.checkResult()
    }

    setValueEnd($event: any) {
        // console.log($event.target.value);
        this.endCurrency = $event.target.value;
        console.log(this.endCurrency);
        this.getElements();
    }

    setValueStart($event: any) {
        // console.log($event.target.value);
        this.startCurrency = $event.target.value;
        console.log(this.startCurrency);
        this.getElements();
    }
}

