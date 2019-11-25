import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatSelectModule} from '@angular/material/select';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallscbComponent } from './comp/callscb/callscb.component';
import { MenuScbItemComponent } from './comp/menu-scb-item/menu-scb-item.component';
import { ChartscbComponent } from './comp/chartscb/chartscb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpscbService } from './serv/httpscb.service';

@NgModule({
  declarations: [
    AppComponent,
    CallscbComponent,
    MenuScbItemComponent,
    ChartscbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [
    HttpscbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
