import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableComponent } from './expandable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  declarations: [ExpandableComponent],
  exports: [
    ExpandableComponent
  ]
})
export class NgxExpandableModule {}
