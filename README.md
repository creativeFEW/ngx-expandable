# NgxExpandable

An Angular 4+ component with zero dependencies that animates the visibility of projected content using a boolean flag.

This component is identical to Bootstrap's [Collapse](https://getbootstrap.com/docs/4.0/components/collapse/#content) or NG Bootstrap's [Collapse](https://ng-bootstrap.github.io/#/components/collapse/examples).

Additional benefits over NG Bootstrap:

* Animates the effect
* Allows customization of the animation duration
* Fewer lines of code as it uses Angular's native animation module

## Installation

`npm i @creativefew/ngx-expandable`

Then add `NgxExpandableModule` to your `imports` array in your main app module.  Make sure to import it at the top of the file.

## Usage

`<ngx-expandable [expanded]="false" [duration]="250"> Some content or other components </ngx-expandable>`

Just pass a boolean value to the `expanded` attribute.  Duration milliseconds is optional.

## Building and deploying to NPM

* `npm run packagr`
* `cd` into the `dist` dir.
* `npm pack` since we'll need to upload just a single file to NPM. Note NPM v 5.3.0 was required to handle a regression issue with `@` characters.
* `npm publish`
