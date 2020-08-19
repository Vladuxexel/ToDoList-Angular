import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ModalModule } from './_modal';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ListComponent],
  imports: [BrowserModule, ModalModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
