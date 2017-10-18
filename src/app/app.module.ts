import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxExpandableModule } from './modules/expandable/expandable.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxExpandableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
