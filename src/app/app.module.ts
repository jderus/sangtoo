import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { FilterPipe } from 'app/pipes/filter.pipe';
import { OrderByPipe } from 'app/pipes/orderBy.pipe';

@NgModule({
  declarations: [
    AppComponent,

    FilterPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
