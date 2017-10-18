import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableComponent } from './expandable.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExpandableComponent],
  exports: [
    ExpandableComponent
  ]
})
export class NgxExpandableModule {}
