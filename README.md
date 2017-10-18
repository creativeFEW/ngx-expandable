# NgxExpandable

An Angular 2+ component that animates the visibility of projected content using a boolean flag.

This component is identical to Bootstrap's [Collapse](https://getbootstrap.com/docs/4.0/components/collapse/#content) or NG Bootstrap's [Collapse](https://ng-bootstrap.github.io/#/components/collapse/examples).

Additional benefits over NG Bootstrap:

* Animates the effect
* Does not depends on Bootstrap but rather jQuery
* Addresses an older issue where the height could snap at the end of the animation
* Allows customization of the animation duration
* Fewer lines of code as this only works in modern browsers (IE10+)

## Installation

`npm i ngx-expandable`

Then add `NgxExpandableModule` to your `imports` array in your main app module.  Make sure to import it at the top of the file.

## Usage

`<ngx-expandable [expanded]="false" [duration]="250"> Some content or other components </ngx-expandable>`

Just pass a boolean value to the `expanded` attribute.  Duration milliseconds is optional.
