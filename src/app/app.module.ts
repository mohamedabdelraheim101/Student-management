import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PopupComponent } from './components/popup/popup.component';
import {ModalModule}from 'ngx-bootstrap/modal';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule,OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { OwlDateTime } from 'ng-pick-datetime/date-time/date-time.class';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    StudentsTableComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ModalModule.forRoot(),
    CommonModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
