import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import {animate, state, style, transition, trigger, keyframes} from '@angular/animations';

@Component({
  selector: 'ngx-expandable',
  template: '<ng-content></ng-content>',
  styleUrls: ['./expandable.component.scss'],
  animations: [
    trigger('bodyExpansion', [
      state('collapsed', style({
        height: '0'
      })),
      state('expanded', style({
        height: 'auto'
      })),
      transition('collapsed => expanded', animate('{{duration}}ms ease', keyframes([
          style({offset: 0, opacity: 0, height: 0}),
          style({offset: 1, opacity: 1, height: '{{expandedHeight}}'}),
        ]))),
      transition('expanded => collapsed', animate('{{duration}}ms ease', keyframes([
          style({offset: 0, opacity: 1, height: '{{expandedHeight}}'}),
          style({offset: 1, opacity: 0, height: 0}),
        ])))
    ])
  ]
})

export class ExpandableComponent {
  @Input() expanded: boolean;
  @Input() duration = 250;
  @HostBinding('@bodyExpansion') get bodyExpansion() {
    return {
      value: this.expanded ? 'expanded' : 'collapsed',
      params: {
        expandedHeight: `${this.getContentHeight()}px`,
        duration: this.duration
      }
    };
  }

  constructor(public el: ElementRef) {}

  getContentHeight() {
    return this.el.nativeElement.scrollHeight;
  }
}
