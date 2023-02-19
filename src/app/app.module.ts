import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './about/page2.component';
import { PartnershipComponent } from './partnership/partnership.component';


@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    PartnershipComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
