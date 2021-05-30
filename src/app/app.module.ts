import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConvertPageComponent } from './convert-page/convert-page.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const аppRoutes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomePageComponent},
  {path:'convert', component: ConvertPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ConvertPageComponent
  ],
    imports: [
        BrowserModule,
        // AppRoutingModule
        ReactiveFormsModule,
        RouterModule.forRoot(аppRoutes),
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
