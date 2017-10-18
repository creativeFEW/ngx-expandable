import {Component, ElementRef, Input, OnChanges} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'ngx-expandable',
  template: '<ng-content></ng-content>',
  styleUrls: ['./expandable.component.scss']
})
export class ExpandableComponent implements OnChanges {
  @Input() expanded: boolean;
  @Input() duration = 250;

  constructor(public el: ElementRef) {}

  expand() {
    $(this.el.nativeElement).stop().animate({
      'height': this.getContentHeight(this.el.nativeElement),
      'opacity': 1
    }, this.duration, 'swing', () => {
      $(this.el.nativeElement).css({'height': 'auto'});
    });
  }

  contract() {
    $(this.el.nativeElement).stop().animate({
      'height': 0,
      'opacity': 0
    });
  }

  ngOnChanges(changes) {
    if (changes.expanded.currentValue) {
      this.expand();
    } else {
      this.contract();
    }
  }

  getContentHeight(nativeEl) {
    return nativeEl.scrollHeight;
  }
}
