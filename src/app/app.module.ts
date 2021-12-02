import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './Components/forms/forms.component';
import { ListComponent } from './Components/list/list.component';
import { NavComponent } from './Components/nav/nav.component';
import { SpinnerComponent } from './Shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ListComponent,
    NavComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
