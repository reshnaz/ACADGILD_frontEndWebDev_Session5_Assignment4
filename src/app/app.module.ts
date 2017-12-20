import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';

import {AppComponent} from './app.component'
import { S5A4Component} from './app.S5A4.component';

// Using both components under @NgModule
@NgModule({
  declarations: [
    AppComponent,S5A4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
