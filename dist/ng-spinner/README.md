# ng-bootstrap-spinner

🍺 Hi there, Ng Bootstrap Spinner for Angular Lovers <3, Thanks...

[![NPM](https://img.shields.io/npm/v/ng-bootstrap-spinner.svg)](https://www.npmjs.com/package/ng-bootstrap-spinner)  [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation
Using NPM:
```html
npm i ng-bootstrap-spinner

npm i bootstrap
```
In you `angular.json` import bootstrap css
```js
"styles": [
    // "src/styles.scss",
    "./node_modules/bootstrap/dist/css/bootstrap.min.css"
],
```
Or

In your `styles.scss` file import bootstrap css
```js
/* You can add global styles to this file, and also import other style files */
@import "bootstrap/dist/css/bootstrap.min.css";

```

## Usage

Import direct in your `app.module.ts` file:
```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import NgSpinnerModule from ng-bootstrap-spinner
import { NgSpinnerModule } from 'ng-bootstrap-spinner';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    //import your NgSpinnerModule here
    NgSpinnerModule
  ],
  providers: []
})
export class AppModule { }
```

Then use wherever you want !! Goodluck:
```html
   <ng-spinner size="5" type="border" color="warning"></ng-spinner>
```

## Note

- **size**: Size `size in rem`
- **color**: You can give any bootstrap color - `primary, secondary, danger etc...`
- **type**: Add spinner type - `grow` or `border`

## Author

Ajay Marathe

+ https://github.com/ajaymarathe

## Copyright and License

Copyright 2019 [Ajay Marathe](https://github.com/ajaymarathe). Code released under the [MIT](https://github.com/ajaymarathe/ng-bootstrap-spinner/blob/master/LICENSE) license.