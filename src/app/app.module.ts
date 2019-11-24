import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallscbComponent } from './comp/callscb/callscb.component';
import { MenuScbItemComponent } from './comp/menu-scb-item/menu-scb-item.component';
import { ChartscbComponent } from './comp/chartscb/chartscb.component';

@NgModule({
  declarations: [
    AppComponent,
    CallscbComponent,
    MenuScbItemComponent,
    ChartscbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
